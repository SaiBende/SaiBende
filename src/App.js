import Navbar from "./componants/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
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
    <Projects/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}