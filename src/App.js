import Navbar from "./componants/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <>
     <Analytics />

    <Navbar/>
    <Hero/>
    <Experience/>
    <Projects/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}