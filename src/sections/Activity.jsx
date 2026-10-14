import React, { useEffect, useMemo, useState } from 'react';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const USERNAME = 'SaiBende';
const PROFILE_URL = `https://github.com/${USERNAME}`;

/**
 * Public, CORS-enabled mirror of the contribution calendar that GitHub shows on
 * the profile page.
 *
 * `y=all` returns every calendar year in one request, with the totals and the
 * four shading levels already normalised per year. `y=last` is the rolling
 * 365-day window behind GitHub's default graph.
 *
 * Read straight from the browser: no token to leak, no build step, and the
 * numbers are never stale.
 */
const API_BASE = `https://github-contributions-api.jogruber.de/v4/${USERNAME}`;
const YEARS_URL = `${API_BASE}?y=all`;
const LAST_URL = `${API_BASE}?y=last`;

// Sentinel for the rolling window, which is not a calendar year
const LAST = 'last';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Row 0 is Sunday, so only Mon / Wed / Fri carry a label (same as GitHub)
const WEEKDAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

// GitHub's five shades of green, re-tinted to the site's orange
const LEVELS = [
    'bg-white/[0.06]',
    'bg-orange-600/25',
    'bg-orange-600/45',
    'bg-orange-600/70',
    'bg-orange-500',
];

// No range needs more than 53 week-columns, so the placeholder shown while
// loading already matches the final size — nothing jumps when data lands
const PLACEHOLDER = Array.from({ length: 53 }, () => Array(7).fill(null));

function utcDate(value) {
    // `new Date('2026-10-14')` is parsed as UTC midnight, so read it back as UTC
    return new Date(`${value}T00:00:00Z`);
}

function formatDay(value) {
    return utcDate(value).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
    });
}

function sumCounts(days) {
    return days.reduce((total, day) => total + day.count, 0);
}

function sortByDate(days) {
    return [...days].sort((a, b) => a.date.localeCompare(b.date));
}

/**
 * Arranges days into Sunday→Saturday columns, padded with blanks so every
 * weekday keeps to its own row. A calendar year almost never starts on a
 * Sunday, which is exactly why the leading pad matters.
 */
function buildGrid(days) {
    if (!days.length) return PLACEHOLDER;

    const sorted = sortByDate(days);
    const columns = [];
    let week = Array(utcDate(sorted[0].date).getUTCDay()).fill(null);

    sorted.forEach((day) => {
        // A row is full, or a new week has begun
        if (week.length === 7 || (utcDate(day.date).getUTCDay() === 0 && week.length)) {
            columns.push(week);
            week = [];
        }
        week.push(day);
    });

    if (week.length) columns.push([...week, ...Array(7 - week.length).fill(null)]);

    return columns;
}

function useContributions() {
    const [state, setState] = useState({
        status: 'loading',
        days: [],
        totals: {},
        rolling: { days: [], total: null },
    });

    useEffect(() => {
        let active = true;

        const load = (url) =>
            fetch(url).then((response) => {
                if (!response.ok) throw new Error(`Request failed with ${response.status}`);
                return response.json();
            });

        // Both requests go out together. The calendar is the one that has to
        // succeed; the rolling window is a bonus, so its failure is swallowed
        // and its tab simply never appears.
        const calendar = load(YEARS_URL);
        const rolling = load(LAST_URL).catch(() => null);

        calendar
            .then((data) => {
                if (!active) return null;
                setState({
                    status: 'ready',
                    days: Array.isArray(data?.contributions) ? data.contributions : [],
                    totals: data?.total ?? {},
                    rolling: { days: [], total: null },
                });
                return rolling;
            })
            .then((data) => {
                if (!active || !data) return;
                setState((previous) => ({
                    ...previous,
                    rolling: {
                        days: Array.isArray(data?.contributions) ? data.contributions : [],
                        total: data?.total?.lastYear ?? null,
                    },
                }));
            })
            .catch(() => {
                // It is a third-party service, so it can be having a bad day.
                // Say so rather than render a calendar that looks empty.
                if (active) setState((previous) => ({ ...previous, status: 'error' }));
            });

        return () => {
            active = false;
        };
    }, []);

    return state;
}

function Activity() {
    const { status, days, totals, rolling } = useContributions();
    const ready = status === 'ready';

    // Calendar years GitHub reports activity for, newest first
    const years = useMemo(
        () =>
            Object.keys(totals)
                .filter((key) => /^\d{4}$/.test(key))
                .sort((a, b) => b.localeCompare(a)),
        [totals]
    );

    const [picked, setPicked] = useState(null);
    const thisYear = String(new Date().getFullYear());
    // Open on the current year, the way GitHub opens on its latest activity
    const selection = picked ?? (years.includes(thisYear) ? thisYear : years[0]) ?? thisYear;

    const { grid, monthLabels, viewTotal, stats } = useMemo(() => {
        const isRolling = selection === LAST;
        const viewDays = sortByDate(
            isRolling ? rolling.days : selection ? days.filter((day) => day.date.startsWith(selection)) : []
        );

        const total = isRolling
            ? rolling.total ?? sumCounts(viewDays)
            : totals[selection] ?? sumCounts(viewDays);

        const built = buildGrid(viewDays);

        // Label a column only where the month changes, like GitHub does
        const labels = built.map((column, index) => {
            const first = column.find(Boolean);
            if (!first) return '';

            const month = utcDate(first.date).getUTCMonth();
            const previous = index > 0 ? built[index - 1].find(Boolean) : null;
            const previousMonth = previous ? utcDate(previous.date).getUTCMonth() : -1;

            return month === previousMonth ? '' : MONTHS[month];
        });

        let activeDays = 0;
        let longestStreak = 0;
        let streak = 0;
        let busiestDay = 0;

        viewDays.forEach((day) => {
            if (day.count > 0) {
                activeDays += 1;
                streak += 1;
                longestStreak = Math.max(longestStreak, streak);
            } else {
                streak = 0;
            }
            busiestDay = Math.max(busiestDay, day.count);
        });

        return {
            grid: built,
            monthLabels: labels,
            viewTotal: total,
            stats: [
                {
                    label: isRolling ? 'Contributions (last year)' : `Contributions in ${selection}`,
                    value: total,
                },
                { label: 'Active days', value: activeDays },
                { label: 'Longest streak', value: longestStreak },
                { label: 'Busiest day', value: busiestDay },
            ],
        };
    }, [days, totals, rolling, selection]);

    const options = rolling.days.length > 0 ? [...years, LAST] : years;
    // Days that have not happened yet get no tooltip
    const today = new Date().toISOString().slice(0, 10);

    const pillClasses = (isActive) =>
        `rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
            isActive
                ? 'border-orange-600 bg-orange-600 text-white'
                : 'border-white/10 bg-white/[0.03] text-gray-400 hover:border-orange-600/40 hover:text-white'
        }`;

    return (
        <section id='GitHub' className='w-full bg-black py-16'>
            <div className='mx-auto max-w-7xl px-5 sm:px-6'>
                <SectionHeading>GitHub Activity</SectionHeading>

                <Reveal
                    y={32}
                    delay={120}
                    className='mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-8'
                >
                    {/* Range selector — calendar years plus GitHub's rolling window */}
                    {ready && options.length > 0 && (
                        <div className='flex flex-wrap items-center gap-2'>
                            <span className='mr-1 text-xs uppercase tracking-wider text-gray-500'>Year</span>
                            {options.map((option) => (
                                <button
                                    key={option}
                                    type='button'
                                    onClick={() => setPicked(option)}
                                    aria-pressed={option === selection}
                                    className={pillClasses(option === selection)}
                                >
                                    {option === LAST ? 'Last year' : option}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Headline numbers, all scoped to the selected range */}
                    <dl className={`grid grid-cols-2 gap-4 sm:grid-cols-4 ${ready && options.length > 0 ? 'mt-6' : ''}`}>
                        {stats.map((stat) => (
                            <div key={stat.label} className='rounded-xl border border-white/5 bg-black/40 px-4 py-3'>
                                <dt className='text-xs uppercase tracking-wider text-gray-500'>{stat.label}</dt>
                                <dd className='mt-1 font-heading text-2xl font-bold text-orange-500'>
                                    {ready ? stat.value : '—'}
                                </dd>
                            </div>
                        ))}
                    </dl>

                    {status === 'error' ? (
                        <p className='mt-8 text-sm text-gray-400'>
                            The contribution chart could not be loaded right now.{' '}
                            <a
                                href={PROFILE_URL}
                                target='_blank'
                                rel='noreferrer'
                                className='font-medium text-orange-500 transition-colors hover:text-orange-400'
                            >
                                View it on GitHub ↗
                            </a>
                        </p>
                    ) : (
                        <>
                            {/* Calendar */}
                            <div className={`mt-8 overflow-x-auto pb-2 ${ready ? '' : 'animate-pulse'}`}>
                                {/* Keyed by range so a fresh pick replays the fade */}
                                <div key={selection} className='chart-fade w-max'>
                                    {/* Month labels, one slot per week column */}
                                    <div className='flex gap-2'>
                                        <div className='w-7 shrink-0' />
                                        <div className='flex gap-[3px] text-[10px] text-gray-500'>
                                            {monthLabels.map((label, index) => (
                                                <span key={index} className='w-[11px] whitespace-nowrap'>
                                                    {label}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Weekday labels + the grid itself */}
                                    <div className='mt-2 flex gap-2'>
                                        <div className='grid w-7 shrink-0 grid-rows-7 gap-[3px] text-[10px] leading-[11px] text-gray-500'>
                                            {WEEKDAY_LABELS.map((label, index) => (
                                                <span key={index} className='h-[11px]'>
                                                    {label}
                                                </span>
                                            ))}
                                        </div>

                                        <div
                                            role='img'
                                            aria-label={`${viewTotal} contributions in ${
                                                selection === LAST ? 'the last year' : selection
                                            }`}
                                            className='grid grid-flow-col grid-rows-7 gap-[3px]'
                                        >
                                            {grid.map((column, columnIndex) =>
                                                column.map((day, rowIndex) => (
                                                    <span
                                                        key={day ? day.date : `empty-${columnIndex}-${rowIndex}`}
                                                        title={
                                                            day && day.date <= today
                                                                ? `${day.count} contribution${
                                                                      day.count === 1 ? '' : 's'
                                                                  } on ${formatDay(day.date)}`
                                                                : undefined
                                                        }
                                                        className={`h-[11px] w-[11px] rounded-[2px] transition-colors duration-200 hover:ring-1 hover:ring-orange-400 ${
                                                            day ? LEVELS[day.level] : LEVELS[0]
                                                        }`}
                                                    />
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Legend + link to the profile */}
                            <div className='mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
                                <div className='flex items-center gap-2 text-xs text-gray-500'>
                                    <span>Less</span>
                                    {LEVELS.map((level) => (
                                        <span key={level} className={`h-[11px] w-[11px] rounded-[2px] ${level}`} />
                                    ))}
                                    <span>More</span>
                                </div>

                                <a
                                    href={PROFILE_URL}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-orange-500'
                                >
                                    <FaGithub className='text-base' />
                                    github.com/{USERNAME}
                                    <FaArrowUpRightFromSquare className='text-xs' />
                                </a>
                            </div>

                            {/* Every year at a glance — click one to jump to it */}
                            {ready && years.length > 0 && (
                                <div className='mt-6 border-t border-white/5 pt-5'>
                                    <p className='text-xs uppercase tracking-wider text-gray-500'>Contribution history</p>
                                    <ul className='mt-3 flex flex-wrap gap-x-7 gap-y-2'>
                                        {years.map((option) => (
                                            <li key={option}>
                                                <button
                                                    type='button'
                                                    onClick={() => setPicked(option)}
                                                    aria-pressed={option === selection}
                                                    className='group flex items-baseline gap-2 text-sm transition-colors'
                                                >
                                                    <span
                                                        className={`transition-colors group-hover:text-white ${
                                                            option === selection ? 'text-white' : 'text-gray-400'
                                                        }`}
                                                    >
                                                        {option}
                                                    </span>
                                                    <span className='font-heading font-semibold text-orange-500 transition-colors group-hover:text-orange-400'>
                                                        {totals[option] ?? 0}
                                                    </span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </>
                    )}
                </Reveal>
            </div>
        </section>
    );
}

export default Activity;
