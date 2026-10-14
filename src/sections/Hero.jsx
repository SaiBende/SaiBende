import React from 'react';
import HeroImg from '../assets/heroimg.png';
import { Typewriter } from 'react-simple-typewriter';
import SocialMedia from '../components/SocialMedia';
import Reveal from '../components/Reveal';

function Hero() {
    return (
        <section id="home" className="relative overflow-hidden bg-black">
            {/* Subtle background accents */}
            <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-orange-600/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-orange-600/5 blur-3xl" />

            <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-28 lg:min-h-screen lg:grid-cols-2 lg:gap-16 lg:px-10">
                {/* Portrait */}
                <Reveal
                    y={32}
                    scale={0.96}
                    duration={800}
                    className="relative flex items-center justify-center lg:justify-end"
                >
                    {/* Soft glow behind the cutout */}
                    <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-orange-600/20 blur-3xl sm:h-72 sm:w-72 lg:h-[420px] lg:w-[420px]" />

                    {/* Transparent portrait — drop-shadow follows the silhouette, not a box */}
                    <img
                        src={HeroImg}
                        alt="Sai Bende"
                        className="relative h-72 w-72 object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.6)] sm:h-80 sm:w-80 lg:h-[480px] lg:w-[480px]"
                    />
                </Reveal>

                {/* Intro — each block cascades in after the one before it */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <Reveal
                        as="span"
                        delay={120}
                        className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-orange-500"
                    >
                        Hi There
                    </Reveal>

                    <Reveal
                        as="h1"
                        delay={200}
                        className="mt-4 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
                    >
                        I&apos;m <span className="text-orange-600">Sai Bende</span>.
                    </Reveal>

                    <Reveal
                        as="p"
                        delay={280}
                        className="mt-4 text-2xl font-semibold leading-tight text-gray-200 sm:text-3xl lg:text-4xl"
                    >
                        I am a{' '}
                        <span className="text-orange-600">
                            <Typewriter
                                words={['Full Stack Dev.', 'Software Dev.', 'Web Designer.', 'Programmer.']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={50}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </Reveal>

                    <Reveal
                        as="p"
                        delay={360}
                        className="mt-5 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg"
                    >
                        Designer and Developer devoted to crafting beautiful web experiences focused on
                        simplicity and purpose.
                    </Reveal>

                    <Reveal delay={440} y={20} className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#ContactMe"
                            className="rounded-full bg-orange-600 px-7 py-3 text-center text-base font-semibold text-white transition-colors duration-300 hover:bg-orange-500"
                        >
                            Contact Me
                        </a>
                        <a
                            href="#Projects"
                            className="rounded-full border border-white/20 px-7 py-3 text-center text-base font-semibold text-white transition-colors duration-300 hover:border-orange-600 hover:text-orange-500"
                        >
                            View Projects
                        </a>
                    </Reveal>

                    <SocialMedia delay={560} />
                </div>
            </div>
        </section>
    );
}

export default Hero;
