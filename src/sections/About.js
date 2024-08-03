import React from 'react'
import saiimg from '../assets/saiimg.png';
import Certificates from '../componants/Certificates';
import SocialMedia from '../componants/SocialMedia';

function About() {
    return (
        <>
        <div className='bg-black pt-30' id='About'>
            <h1
                class="font-heading mb-4  text-center font-bold tracking-tight text-white underline text-4xl sm:text-5xl">
                About 
            </h1>
            <div className="bg-black">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-black text-white shadow rounded-lg p-6 border">
                                <div className="flex flex-col items-center">
                                <img src={saiimg} className="w-36  bg-gray-300 rounded-full mb-4 shrink-0 " alt="profile"/>



                                    <h1 className="text-xl font-bold">Sai Bende</h1>
                                    <p className="text-orange-700">Web Developer</p>
                                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                        <a href="#ContactMe" className="bg-orange-600 hover:bg-orange-500 text-white py-2 px-4 rounded">Contact</a>
                                        <a href="https://docs.google.com/document/d/1sSJZgIcrhiIrI32wuz8aSJ5rroR7rub7YdkMcBp-EDw/edit?usp=drive_link" className="bg-gray-300 hover:bg-orange-400 text-gray-700 py-2 px-4 rounded">Resume</a>
                                    </div>
                                </div>
                                <hr className="my-6 border-t border-gray-300" />
                                <div className="flex flex-col">
                                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Skills</span>
                                    <ul>
                                        <li className="mb-2">JavaScript</li>
                                        <li className="mb-2">React Js</li>
                                        <li className="mb-2">Node.js</li>
                                        <li className="mb-2">Express js</li>
                                        
                                        <li className="mb-2">Tailwind CSS</li>
                                        
                                        <li className="mb-2">HTML,CSS</li>
                                        
                                        <li className="mb-2">Java</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9 border rounded">
                            <div className="g-black text-white shadow rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4">About Me</h2>
                                <p className="text-gray-300 text-justify">I’m a dedicated and passionate Web developer with a love for problem-solving and innovation. With a strong foundation in various programming languages and frameworks, I strive to create website that not only functions efficiently but also drives progress in the tech industry. I believe in the power of collaboration and am always eager to learn and grow. In my spare time, I enjoy exploring the latest tech trends and contributing to open-source projects. I’m excited to connect with like-minded individuals and look forward to the opportunities and challenges that lie ahead in my software career.
                                </p>

                                <h3 className="font-semibold text-center mt-3 -mb-2">
                                    Find me on
                                </h3>
                                <div className="flex justify-center items-center gap-6 my-6">
                                    <SocialMedia/>
                                </div>


                                <h2 className="text-xl font-bold mt-6 mb-4">Certificates</h2>
                                <div className="mb-6">
                                    <Certificates/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default About