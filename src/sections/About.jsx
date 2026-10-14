import React from 'react';
import saiimg1 from '../assets/saiiimg-1.png';
import Certificates from "../components/Certificates";
import SocialMedia from "../components/SocialMedia";
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import {
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiShadcnui,
    SiHtml5,
    SiCss,
    SiNodedotjs,
    SiExpress,
    SiSpringboot,
    SiMongodb,
    SiMysql,
    SiPostgresql,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { TbDatabase } from 'react-icons/tb';

// icon = brand logo, color = that brand's own colour
const skillGroups = [
    {
        label: 'Frontend',
        items: [
            { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
            { name: 'React.js', Icon: SiReact, color: '#61DAFB' },
            { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
            { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
            { name: 'Shadcn UI', Icon: SiShadcnui, color: '#FFFFFF' },
            { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
            { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
        ],
    },
    {
        label: 'Backend',
        items: [
            { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
            { name: 'Express.js', Icon: SiExpress, color: '#FFFFFF' },
            { name: 'Java', Icon: FaJava, color: '#F89820' },
            { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
        ],
    },
    {
        label: 'Database',
        items: [
            { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
            { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
            { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
            { name: 'SQL', Icon: TbDatabase, color: '#94A3B8' },
        ],
    },
];

const RESUME_URL = 'https://docs.google.com/document/d/1sSJZgIcrhiIrI32wuz8aSJ5rroR7rub7YdkMcBp-EDw/edit?usp=drive_link';

function About() {
    return (
        <section id='About' className='w-full bg-black py-16'>
            <div className='mx-auto max-w-7xl px-5'>
                <SectionHeading>About</SectionHeading>

                <div className='mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12'>
                    {/* Profile / skills card */}
                    <aside className='lg:col-span-4'>
                        <Reveal y={32} className='flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center sm:p-8'>
                            <div className='relative flex justify-center'>
                                {/* Soft orange glow behind the transparent cutout */}
                                <span
                                    aria-hidden='true'
                                    className='absolute bottom-0 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-orange-600/25 blur-3xl'
                                />
                                <img
                                    src={saiimg1}
                                    alt='Sai Bende'
                                    className='relative h-56 w-auto object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.6)]'
                                    style={{
                                        WebkitMaskImage:
                                            'linear-gradient(to bottom, #000 70%, transparent 100%)',
                                        maskImage:
                                            'linear-gradient(to bottom, #000 70%, transparent 100%)',
                                    }}
                                />
                            </div>

                            <h3 className='mt-5 font-heading text-2xl font-bold text-white'>
                                Sai Bende
                            </h3>
                            <p className='mt-1 text-sm font-medium text-orange-500'>
                                Full Stack Developer
                            </p>

                            <div className='mt-6 flex w-full flex-col gap-3 sm:flex-row'>
                                <a
                                    href='#ContactMe'
                                    className='flex-1 rounded-full bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-orange-500'
                                >
                                    Contact
                                </a>
                                <a
                                    href={RESUME_URL}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='flex-1 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-orange-600 hover:bg-orange-600'
                                >
                                    Resume
                                </a>
                            </div>

                            <div className='mt-8 w-full border-t border-white/10 pt-6 text-left'>
                                <h4 className='font-heading text-xs font-semibold uppercase tracking-wider text-orange-500'>
                                    Skills
                                </h4>
                                <div className='mt-4 space-y-4'>
                                    {skillGroups.map((group) => (
                                        <div key={group.label}>
                                            <p className='text-[10px] font-semibold uppercase tracking-widest text-gray-500'>
                                                {group.label}
                                            </p>
                                            <ul className='mt-2 flex flex-wrap gap-2'>
                                                {group.items.map(({ name, Icon, color }) => (
                                                    <li
                                                        key={name}
                                                        className='flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors duration-300 hover:border-orange-600/50 hover:text-white'
                                                    >
                                                        <Icon
                                                            className='h-4 w-4 shrink-0'
                                                            style={{ color }}
                                                            aria-hidden='true'
                                                        />
                                                        {name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </aside>

                    {/* Bio + socials + certificates */}
                    <div className='lg:col-span-8'>
                        <Reveal delay={120} y={32} className='rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8'>
                            <h3 className='font-heading text-2xl font-bold text-white'>
                                About Me
                            </h3>
                            <p className='mt-4 text-base leading-relaxed text-gray-300 text-justify'>
                                I&rsquo;m a dedicated and passionate Full Stack developer with a love for
                                problem-solving and innovation. With a strong foundation in various
                                programming languages and frameworks, I strive to create website that
                                not only functions efficiently but also drives progress in the tech
                                industry. I believe in the power of collaboration and am always eager
                                to learn and grow. In my spare time, I enjoy exploring the latest tech
                                trends and contributing to open-source projects. I&rsquo;m excited to
                                connect with like-minded individuals and look forward to the
                                opportunities and challenges that lie ahead in my software career.
                            </p>

                            <h4 className='mt-10 text-center text-xs font-semibold uppercase tracking-wider text-gray-400'>
                                Find me on
                            </h4>
                            <div className='mt-2 flex justify-center'>
                                <SocialMedia />
                            </div>

                            <h3 className='mt-12 font-heading text-2xl font-bold text-white'>
                                Certificates
                            </h3>
                            <div className='mt-5'>
                                <Certificates />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
