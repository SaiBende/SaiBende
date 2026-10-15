import React from 'react'
import interncomplogo from '../assets/interncomplogo.jpeg';
import hangukverseLogo from '../assets/lumantara_logo.jpg';
import ogHome from '../assets/og-home.png';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const experiences = [
    {
        role: 'Full Stack Developer Intern',
        company: 'Lumantara Ltd — HangukVerse Platform (Remote)',
        period: 'Sept 15, 2025 – Present',
        current: true,
        url: 'https://hangukverse.com',
        logo: hangukverseLogo,
        logoAlt: 'HangukVerse logo',
        preview: ogHome,
        previewAlt: 'HangukVerse website preview',
        summary:
            'Engineered a production-ready Korean culture community platform from Figma concepts to live deployment — full-stack architecture, real-time systems, billing integration, and cloud infrastructure.',
        responsibilities: [
            'Developed 90+ pages across user, community, admin, and content modules using Next.js 16 (App Router), React 19, TypeScript; deployed on Vercel with global edge CDN.',
            'Built REST API with Express.js + TypeScript: 20+ route groups, 30+ controllers, layered routes/controllers/services; hosted on Railway, scaled via PM2 clustering.',
            'Designed 40+ table PostgreSQL schema on Supabase with PgBouncer, powering posts, communities, chat, subscriptions, events, notifications, and IAP transactions.',
            'Integrated Stripe + Razorpay subscriptions with secure webhook handling (raw-body verification + idempotency).',
            'Implemented real-time chat (DM + groups), geolocation Nearby Fans map with ghost-mode (React Leaflet + PostGIS), and Webtoon PDF reader with progress sync.',
            'Engineered 7-tier API rate limiting, DDoS protection, bot-blocking, JWT auth middleware, and tier-based feature access (Free/Premium/VIP).',
            'Set up AWS S3 presigned uploads with policy enforcement and file validation, and Nodemailer transactional email workflows with scheduled subscription cleanup.',
            'Delivered admin panel for content moderation, community management, events/surveys, reports, and GDPR-compliant account deletion.',
        ],
    },
    {
        role: 'Web Development and Design Intern',
        company: 'Ministry of Housing and Urban Affairs, TULIP (The Urban Learning Internship Program)',
        period: 'July 5, 2024 – August 7, 2024',
        current: false,
        logo: interncomplogo,
        logoAlt: 'TULIP logo',
        summary:
            'Contributed to the Business Requirements Document (BRD) for the SEP DAY-NULM initiative.',
        responsibilities: [
            'Participated in research, design, and fieldwork for web development projects.',
            'Assisted in developing user interfaces, software interfaces, and communication protocols.',
            'Collaborated on defining system features, functional requirements, and use cases.',
            'Documented key aspects like operating environments, user characteristics, and non-functional requirements, including performance and security standards.',
        ],
    },
];

function Experience() {
    return (
        <section id='Experience' className='w-full bg-black py-10'>
            <div className='mx-auto max-w-4xl px-5'>
                <SectionHeading>My Experience</SectionHeading>

                <div className='mt-8 flex flex-col gap-6'>
                    {experiences.map((item, index) => (
                        <Reveal
                            as='article'
                            key={item.role}
                            delay={index * 90}
                            y={28}
                            className='rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-orange-600/40 sm:p-7'
                        >
                            {/* Optional site preview */}
                            {item.preview && (
                                <a
                                    href={item.url}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='group mb-6 block overflow-hidden rounded-xl border border-white/10'
                                >
                                    <img
                                        src={item.preview}
                                        alt={item.previewAlt}
                                        loading='lazy'
                                        decoding='async'
                                        className='max-h-80 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]'
                                    />
                                </a>
                            )}

                            {/* Header: logo + role/company on the left, period on the right */}
                            <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
                                <div className='flex items-start gap-4'>
                                    <img
                                        src={item.logo}
                                        alt={item.logoAlt}
                                        loading='lazy'
                                        decoding='async'
                                        className='h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-orange-600'
                                    />
                                    <div className='min-w-0'>
                                        <h3 className='text-lg font-semibold leading-snug text-white'>
                                            {item.role}
                                        </h3>
                                        <p className='mt-0.5 text-sm leading-relaxed text-gray-400'>
                                            {item.company}
                                        </p>
                                        {item.url && (
                                            <a
                                                href={item.url}
                                                target='_blank'
                                                rel='noreferrer'
                                                className='mt-1 inline-block text-sm text-orange-500 hover:text-orange-400 hover:underline'
                                            >
                                                {item.url.replace('https://', '')}
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <span
                                    className={`inline-flex w-fit shrink-0 items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${
                                        item.current
                                            ? 'border-orange-600/50 bg-orange-600/10 text-orange-400'
                                            : 'border-white/15 bg-white/5 text-gray-300'
                                    }`}
                                >
                                    {item.current && (
                                        <span className='h-1.5 w-1.5 rounded-full bg-orange-500' />
                                    )}
                                    {item.period}
                                </span>
                            </div>

                            {/* Body */}
                            <div className='mt-6'>
                                <p className='text-sm leading-relaxed text-gray-300 sm:text-base'>
                                    {item.summary}
                                </p>

                                <h4 className='mb-2 mt-5 text-base font-semibold text-orange-600'>
                                    Key Responsibilities
                                </h4>
                                <ul className='list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-300'>
                                    {item.responsibilities.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
