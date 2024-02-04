import Navbar from "./componants/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from './sections/Hero';
import Projects from './sections/Projects';

export default function App() {
  return (
    <>
     
    <Navbar/>
    <Hero/>
    <Projects/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}