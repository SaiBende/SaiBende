
import React, { useState } from 'react';
import Confetti from 'react-confetti';
import HeroImg from "../assets/heroimg.png";
import { Typewriter } from 'react-simple-typewriter';
import SocialMedia from '../componants/SocialMedia';





function Hero() {
    const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    setShowConfetti(true);
    // Optionally, you can reset the confetti after a certain duration
    setTimeout(() => {
      setShowConfetti(false);
    }, 6000); // Adjust the duration as needed
  };

   
    return (
        <div>
            {showConfetti && <Confetti numberOfPieces={500} width={window.innerWidth}  height={window.innerHeight} />}
            <section className="px-10 pt-32  bg-black">
           
                <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                    <div className="order-1 lg:order-1 shadow-2xl ">
                        <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px] " src={HeroImg} alt="" />
                    </div>
                    <div className="order-2 lg:order-2  flex flex-col justify-center lg:items-start text-center sm:text-left ">
                        <p className="mt-2 text-3xl md:text-lg sm:text-sm text-white">Hi There</p>
                        <p className="text-4xl font-bold md:text-7xl  text-white ">I'm <span className="text-orange-600">Sai Bende</span>.</p>
                        <p className="text-3xl  md:text-6xl text-white">I am a {' '} <span>
                            <Typewriter
                                words={['Full Stack Dev.', 'Software Dev.', 'Web Designer.', 'Progemmer.']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={50}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span></p>
                        <p className="mt-2 lg:text-3xl md:text-lg sm:text-sm  text-white ">Designer and Developer devoted to crafting beautiful web experiences
                            focused on simplicity and purpose.</p>
                        <div className='flex'>
                            <button className="text-lg md:text-2xl bg-orange-600 text-white py-2 m-2 px-5 mt-10 hover:bg-zinc-800 rounded-full"><a href='#ContactMe'>Contact Me</a></button>
                            <button className="text-lg md:text-2xl bg-orange-600 text-white py-2 m-2 px-5 mt-10 hover:bg-zinc-800 rounded-full " onClick={handleClick} > 🎉</button>
                        </div>

                        <SocialMedia />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Hero
