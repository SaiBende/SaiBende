import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

/**
 * Describes the state of the page, and is supplied by <App>:
 *
 *   ready    — the preloader has finished, so reveals may start playing.
 *              Without this, blocks that are already on screen (the hero,
 *              mostly) would finish animating *behind* the overlay.
 *   complete — the visitor has reached the end of the document. Anything still
 *              waiting to be scrolled to is then simply shown. This matters
 *              because there is no room left to scroll the final blocks past
 *              the trigger line, and they must never be left invisible.
 *
 * Defaults to "all of that already happened", so a <Reveal> rendered outside
 * the provider just behaves normally.
 */
export const RevealGateContext = createContext({ ready: true, complete: true });

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

function prefersReducedMotion() {
    return (
        typeof window !== 'undefined' &&
        typeof window.matchMedia === 'function' &&
        window.matchMedia(REDUCED_MOTION).matches
    );
}

/**
 * Fades and slides its children into view the first time they are scrolled to.
 *
 * Intentionally dependency-free: one IntersectionObserver plus the `.reveal`
 * CSS animation in index.css, which keeps the bundle tiny and avoids adding an
 * animation library to the project.
 *
 * Content is never left invisible — if the browser has no IntersectionObserver,
 * or the visitor has asked for reduced motion, everything is simply shown.
 *
 *   <Reveal>…</Reveal>                       // renders a <div>
 *   <Reveal as="li" delay={80}>…</Reveal>    // keeps the host element's tag
 *   <Reveal y={32} scale={0.96}>…</Reveal>   // custom travel
 */
function Reveal({
    children,
    as: Tag = 'div',
    delay = 0,
    x = 0,
    y = 24,
    scale = 1,
    duration,
    className = '',
    style,
    ...rest
}) {
    const { ready, complete } = useContext(RevealGateContext);
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    const [noAnimation] = useState(
        () => prefersReducedMotion() || typeof IntersectionObserver === 'undefined'
    );

    useEffect(() => {
        if (noAnimation || inView) return;

        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) setInView(true);
            },
            // threshold 0 + a bottom inset, so the animation triggers as soon as
            // an element crosses into view. A ratio-based threshold would never
            // fire for blocks taller than the viewport.
            { threshold: 0, rootMargin: '0px 0px -12% 0px' }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [noAnimation, inView]);

    const shown = noAnimation || complete || (ready && inView);

    return (
        <Tag
            ref={ref}
            className={`reveal ${shown ? 'reveal-in' : ''} ${className}`.trim()}
            style={{
                '--reveal-x': `${x}px`,
                '--reveal-y': `${y}px`,
                '--reveal-scale': scale,
                ...(duration ? { '--reveal-duration': `${duration}ms` } : null),
                ...(delay ? { '--reveal-delay': `${delay}ms` } : null),
                ...style,
            }}
            {...rest}
        >
            {children}
        </Tag>
    );
}

export default Reveal;
