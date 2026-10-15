import React from 'react';
import Logo from '../assets/logo.png';

function Preloader({ isFading }) {
    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-black transition-opacity duration-500 ${
                isFading ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
        >
            {/* Logo with animated ring + glow */}
            <div className="relative flex h-40 w-40 items-center justify-center">
                {/* Soft pulsing glow */}
                <span className="absolute inset-0 rounded-full bg-orange-600/25 blur-2xl animate-pulse" />

                {/* Spinning ring */}
                <span className="absolute inset-0 rounded-full border-2 border-white/10 border-t-orange-600 animate-spin" />

                {/* Second, slower counter-rotating ring */}
                <span className="absolute inset-3 rounded-full border border-white/5 border-b-orange-600/70 animate-[spin-reverse_2.4s_linear_infinite]" />

                {/* Logo */}
                <img
                    src={Logo}
                    alt="Sai Bende logo"
                    width={256}
                    height={256}
                    decoding="async"
                    className="h-24 w-24 rounded-full object-cover animate-[logo-pulse_1.6s_ease-in-out_infinite]"
                />
            </div>

            {/* Text */}
            <div className="flex flex-col items-center gap-3">
                <p className="text-2xl font-bold text-white lg:text-3xl">
                    Sai <span className="text-orange-600">Bende</span>
                </p>
                <span className="text-xs font-medium uppercase tracking-[0.4em] text-gray-400">
                    Loading
                </span>

                {/* Indeterminate progress bar */}
                <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
                    <span className="block h-full w-1/2 rounded-full bg-orange-600 animate-[loading-bar_1.2s_ease-in-out_infinite]" />
                </div>
            </div>
        </div>
    );
}

export default Preloader;
