import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';

const NAV_LINKS = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Experience', href: '#Experience', id: 'Experience' },
    { label: 'Projects', href: '#Projects', id: 'Projects' },
    { label: 'GitHub', href: '#GitHub', id: 'GitHub' },
    { label: 'About', href: '#About', id: 'About' },
    { label: 'Contact Me', href: '#ContactMe', id: 'ContactMe' },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const closeMenu = () => setIsOpen(false);

    // Close the mobile menu when the viewport grows to desktop size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Highlight the nav link for the section currently in view
    useEffect(() => {
        const sections = NAV_LINKS
            .map((link) => document.getElementById(link.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed top-0 z-50 w-full bg-black">
            <div className="mx-auto max-w-7xl px-4">
                {/* Top bar */}
                <div className="flex h-16 items-center justify-between lg:h-20">
                    {/* Logo */}
                    <a href="#home" onClick={closeMenu} className="flex items-center gap-2">
                        <img
                            className="h-11 w-11"
                            src={Logo}
                            alt="Sai Bende — Full Stack Developer & Web Developer in Nanded, Maharashtra"
                            width={256}
                            height={256}
                            decoding="async"
                        />
                        <span className="text-2xl font-bold text-white transition-colors hover:text-orange-600 lg:text-3xl">
                            Portfolio
                        </span>
                    </a>

                    {/* Desktop links */}
                    <ul className="hidden items-center gap-1 lg:flex">
                        {NAV_LINKS.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.href}
                                    aria-current={activeSection === link.id ? 'page' : undefined}
                                    className="group relative inline-block px-4 py-2 text-lg text-white transition-colors hover:text-orange-600"
                                >
                                    {link.label}
                                    <span
                                        className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-orange-600 transition-transform duration-300 ease-out ${
                                            activeSection === link.id
                                                ? 'scale-x-100'
                                                : 'scale-x-0 group-hover:scale-x-100'
                                        }`}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Animated hamburger (mobile) */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((open) => !open)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        className="relative flex h-10 w-10 items-center justify-center text-white focus:outline-none lg:hidden"
                    >
                        <span
                            className={`absolute h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                                isOpen ? 'rotate-45' : '-translate-y-2'
                            }`}
                        />
                        <span
                            className={`absolute h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                                isOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
                            }`}
                        />
                        <span
                            className={`absolute h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
                                isOpen ? '-rotate-45' : 'translate-y-2'
                            }`}
                        />
                    </button>
                </div>

                {/* Mobile dropdown */}
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <ul className="flex flex-col items-center gap-1 border-t border-white/10 py-3 text-xl">
                        {NAV_LINKS.map((link) => (
                            <li key={link.id} className="w-full">
                                <a
                                    href={link.href}
                                    onClick={closeMenu}
                                    aria-current={activeSection === link.id ? 'page' : undefined}
                                    className="group relative flex w-full items-center justify-center px-4 py-2 text-white transition-colors hover:text-orange-600"
                                >
                                    {link.label}
                                    <span
                                        className={`pointer-events-none absolute bottom-1 left-1/2 h-0.5 w-12 -translate-x-1/2 rounded-full bg-orange-600 transition-transform duration-300 ease-out ${
                                            activeSection === link.id
                                                ? 'scale-x-100'
                                                : 'scale-x-0 group-hover:scale-x-100'
                                        }`}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
