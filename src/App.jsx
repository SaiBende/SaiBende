import { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from "./components/Navbar"
import About from "./sections/About"
import Activity from "./sections/Activity";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Preloader from "./components/Preloader";
import { RevealGateContext } from "./components/Reveal";
import { Analytics } from '@vercel/analytics/react';

// Keep the loader on screen at least this long, so the animation is visible
const MIN_DISPLAY = 1200;
// Never hold the page hostage longer than this, even if assets are slow
const MAX_DISPLAY = 4000;
// Must match the fade-out duration on the Preloader overlay
const FADE_DURATION = 500;

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  // True once the visitor has reached the very bottom of the document
  const [seenEnd, setSeenEnd] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    let finished = false;
    const start = Date.now();

    const finish = () => {
      if (finished) return;
      finished = true;

      const remaining = Math.max(MIN_DISPLAY - (Date.now() - start), 0);
      const hideTimer = setTimeout(() => {
        setFading(true);
        setTimeout(() => setLoading(false), FADE_DURATION);
      }, remaining);

      return hideTimer;
    };

    let minTimer;
    if (document.readyState === 'complete') {
      minTimer = finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }
    const maxTimer = setTimeout(finish, MAX_DISPLAY);

    return () => {
      window.removeEventListener('load', finish);
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, []);

  // Watch the last pixel of the page. Once it has been on screen there is no
  // scrolling left to do, so any reveal still parked below the fold is shown
  // instead of waiting for a trigger it can never reach (scroll reveals inset
  // their trigger point from the bottom of the viewport, and blocks in the
  // final stretch of the page have no room left to cross it).
  useEffect(() => {
    const node = endRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setSeenEnd(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setSeenEnd(true);
        observer.disconnect();
      }
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Prevent scrolling while the loader is on screen
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  const gate = useMemo(
    () => ({ ready: !loading, complete: seenEnd }),
    [loading, seenEnd]
  );

  return (
    // Sections stay parked until the loader is gone, so nothing animates
    // behind the overlay where nobody can see it
    <RevealGateContext.Provider value={gate}>
      {loading && <Preloader isFading={fading} />}
      <Analytics />

      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Activity />
      <About />
      <Contact />
      <Footer />
      {/* Sentinel for the end of the document (see the effect above) */}
      <div ref={endRef} aria-hidden="true" className="h-px w-full" />
    </RevealGateContext.Provider>
  )
}
