import React from 'react';
import {
    FaArrowUp,
    FaEnvelope,
    FaGithub,
    FaLinkedinIn,
    FaLocationDot,
    FaPhone,
    FaXTwitter,
} from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import Logo from '../assets/logo.png';
import Reveal from '../components/Reveal';

const SITE = {
    name: 'Sai Bende',
    domain: 'saibende.in',
    url: 'https://saibende.in',
    email: 'bendesai5703@gmail.com',
    phone: '+91 89755 55385',
    phoneLink: 'tel:+918975555385',
    location: 'Vazirabad, Nanded, Maharashtra, India',
};

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'Experience', href: '#Experience' },
    { label: 'Projects', href: '#Projects' },
    { label: 'GitHub', href: '#GitHub' },
    { label: 'About', href: '#About' },
    { label: 'Contact Me', href: '#ContactMe' },
];

const SOCIALS = [
    { label: 'GitHub', href: 'https://github.com/SaiBende', Icon: FaGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saibende', Icon: FaLinkedinIn },
    { label: 'LeetCode', href: 'https://leetcode.com/SaiBende/', Icon: SiLeetcode },
    { label: 'X', href: 'https://x.com/SaiBende1', Icon: FaXTwitter },
];

const DETAILS = [
    { Icon: FaEnvelope, label: SITE.email, href: `mailto:${SITE.email}` },
    { Icon: FaPhone, label: SITE.phone, href: SITE.phoneLink },
    { Icon: FaLocationDot, label: SITE.location },
];

const linkClasses =
    'text-sm text-gray-400 transition-colors duration-300 hover:text-orange-500';

function Footer() {
    // Rendered at runtime, so this never goes stale the way a hard-coded year does
    const year = new Date().getFullYear();

    return (
        <footer className='w-full border-t border-white/10 bg-black'>
            <div className='mx-auto max-w-7xl px-5 py-12 sm:px-6'>
                <div className='grid gap-10 md:grid-cols-3'>
                    {/* Brand */}
                    <Reveal y={24}>
                        <a href='#home' className='inline-flex items-center gap-2'>
                            <img
                                className='h-11 w-11'
                                src={Logo}
                                alt={`${SITE.name} — Full Stack Developer`}
                                width={256}
                                height={256}
                                loading='lazy'
                                decoding='async'
                            />
                            <span className='font-heading text-2xl font-bold text-white'>
                                {SITE.name}
                            </span>
                        </a>

                        <p className='mt-4 max-w-xs text-sm leading-relaxed text-gray-400'>
                            Full stack developer and web developer in Nanded, Maharashtra, India.
                            I build fast, accessible websites and web applications with React,
                            Next.js, Node.js and Java.
                        </p>
                        <p className='mt-3 max-w-xs text-sm leading-relaxed text-gray-500'>
                            Available for freelance and full-time work in Nanded, Pune, Mumbai and
                            remotely across India.
                        </p>

                        <ul className='mt-6 flex flex-wrap items-center gap-3'>
                            {SOCIALS.map(({ label, href, Icon }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target='_blank'
                                        rel='me noreferrer'
                                        aria-label={`${label} profile of Sai Bende`}
                                        className='flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-400 transition-colors duration-300 hover:border-orange-600/40 hover:text-orange-500'
                                    >
                                        <Icon className='h-5 w-5' aria-hidden='true' />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    {/* Quick links */}
                    <Reveal delay={100} y={24}>
                        <h3 className='font-heading text-sm font-semibold uppercase tracking-wider text-white'>
                            Quick Links
                        </h3>
                        <ul className='mt-4 space-y-2.5'>
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={`group inline-flex items-center gap-2 ${linkClasses}`}
                                    >
                                        <span className='h-px w-0 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-3' />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    {/* Contact details */}
                    <Reveal delay={200} y={24}>
                        <h3 className='font-heading text-sm font-semibold uppercase tracking-wider text-white'>
                            Get in Touch
                        </h3>
                        <ul className='mt-4 space-y-3'>
                            {DETAILS.map(({ Icon, label, href }) => (
                                <li key={label} className='flex items-start gap-3'>
                                    <Icon
                                        className='mt-0.5 h-4 w-4 shrink-0 text-orange-500'
                                        aria-hidden='true'
                                    />
                                    {href ? (
                                        <a href={href} className={`break-all ${linkClasses}`}>
                                            {label}
                                        </a>
                                    ) : (
                                        <span className='text-sm text-gray-400'>{label}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
            </div>

            {/* Bottom bar */}
            <div className='border-t border-white/10'>
                <Reveal delay={150} y={20} className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 sm:flex-row sm:px-6'>
                    <p className='text-center text-sm text-gray-400 sm:text-left'>
                        &copy; {year}{' '}
                        <a
                            href={SITE.url}
                            target='_blank'
                            rel='noreferrer'
                            className='font-medium text-gray-300 transition-colors duration-300 hover:text-orange-500'
                        >
                            {SITE.domain}
                        </a>{' '}
                        &mdash; All rights reserved.
                    </p>

                    <a
                        href='#home'
                        className='group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-300 transition-colors duration-300 hover:border-orange-600/40 hover:text-orange-500'
                    >
                        Back to top
                        <FaArrowUp
                            className='h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5'
                            aria-hidden='true'
                        />
                    </a>
                </Reveal>
            </div>
        </footer>
    );
}

export default Footer;
