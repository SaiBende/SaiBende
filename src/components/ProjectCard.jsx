import React, { useState } from 'react';
import Reveal from './Reveal';

// Descriptions longer than this get a "Read more" toggle (clamped to 3 lines)
const DESCRIPTION_LIMIT = 150;

function ProjectCard({ image, name, description, github, live, tags = [], delay = 0 }) {
    const [expanded, setExpanded] = useState(false);
    const isLong = description.length > DESCRIPTION_LIMIT;

    // Always show both buttons side by side. If one link is missing,
    // fall back to the link that exists so both buttons stay visible.
    const githubUrl = github || live;
    const liveUrl = live || github;
    const hasLinks = Boolean(githubUrl || liveUrl);

    return (
        <Reveal
            as="article"
            delay={delay}
            y={28}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-orange-600/40"
        >
            {/* Preview image */}
            <div className="relative h-52 w-full overflow-hidden sm:h-56">
                <img
                    src={image}
                    alt={`${name} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-semibold text-white">{name}</h3>

                {tags.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <li
                                key={tag}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                )}

                <p
                    className={`mt-4 text-sm leading-relaxed text-gray-400 ${
                        expanded ? '' : 'line-clamp-3'
                    }`}
                >
                    {description}
                </p>

                {isLong && (
                    <button
                        type="button"
                        onClick={() => setExpanded((value) => !value)}
                        className="mt-2 w-fit text-sm font-medium text-orange-500 transition-colors hover:text-orange-400"
                    >
                        {expanded ? 'Show less' : 'Read more'}
                    </button>
                )}

                {/* Actions pinned to the bottom for consistent card heights */}
                {hasLinks && (
                    <div className="mt-auto flex gap-2 pt-6">
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-orange-600 hover:bg-orange-600"
                        >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                />
                            </svg>
                            GitHub
                        </a>

                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-orange-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M7 17L17 7" />
                                <path d="M7 7h10v10" />
                            </svg>
                            Live
                        </a>
                    </div>
                )}
            </div>
        </Reveal>
    );
}

export default ProjectCard;
