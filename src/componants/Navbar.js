import React, { useState } from 'react';
import Personallogo from '../assets/Personallogo.png';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="bg-black p-3  fixed w-full top-0 z-50">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                    <div className='flex justify-between items-center '>
                    <img className="m-2" src={Personallogo}  width={45} alt='logo'/>
                    <div className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer">Portfolio</div>
                    </div>
                    

                    {/* Hamburger menu for small screens */}
                    <div className="lg:hidden ">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Navigation links */}
                    <div className={`lg:flex flex-col lg:flex-row ${isOpen ? 'block' : 'hidden'} lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl`}>
                        <a href="/" className="text-white  px-4 py-2 hover:text-orange-600 hover:underline">Home</a>
                        <a href="#Experience" className="text-white  px-4 py-2  hover:text-orange-600 hover:underline">Experience</a>
                        <a href="#Projects" className="text-white  px-4 py-2  hover:text-orange-600 hover:underline">Projects</a>
                        <a href="#About" className="text-white  px-4 py-2  hover:text-orange-600 hover:underline">About</a>
                        <a href="#ContactMe" className="text-white  px-4 py-2  hover:text-orange-600 hover:underline">Contact Me</a>
                    </div>
                </div>
                
            </nav>


        </div>
    );
}

export default Navbar;
