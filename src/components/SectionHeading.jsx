import React from 'react';
import Reveal from './Reveal';

function SectionHeading({ children, className = '' }) {
    return (
        <div className={`flex flex-col items-center text-center ${className}`}>
            <Reveal
                as="h2"
                y={20}
                className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
                {children}
            </Reveal>
            <Reveal
                as="span"
                y={0}
                scale={0.4}
                delay={160}
                className="mt-4 h-1 w-24 rounded-full bg-orange-600 shadow-[0_0_12px_rgba(234,88,12,0.5)]"
            />
        </div>
    );
}

export default SectionHeading;
