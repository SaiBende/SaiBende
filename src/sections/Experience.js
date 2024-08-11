import React from 'react'
import interncomplogo from '../assets/interncomplogo.jpeg';

function Experience() {
    return (


        <>  <section id='Experience' className='experience bg-black w-full'>
            <div class="bg-black flex flex-col justify-center items-center w-full  p-5">
                <h1 className='text-white text-4xl  justify-center text-center underline font-bold py-4'> My Experience
                </h1>

                <div class='flex flex-col items-center justify-between bg-black dark:bg-black-800 shadow-md shadow-gray-300 text-white dark:text-white border border-gray-200 dark:border-gray-600 w-full md:w-8/12 mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4'>
                    <div class='w-full flex items-center justify-between'>
                        <div class='flex items-center justify-center px-2 md:px-6'>
                            <img class='w-16  rounded-full ring-2 ring-orange-600 shadow-lg shadow-orange-600 m-2 md:block sm:flex-col' src={interncomplogo} alt="" />
                            <div class='text-left '>

                                <h4 class='text-lg md:text-base font-medium text-white'>Web Development and Design Intern</h4>
                            </div>
                        </div>
                        <div class='text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500'>
                            <p class='text-sm md:text-base text-white'> July 5,2024–August 7,2024 </p>
                            <p class='text-sm md:text-base text-white'>Ministry of Housing and Urban Affairs,TULIP(The Urban Learning Internship Program)</p>
                        </div>
                    </div>
                    <div class='text-left p-2'>
                        <p class='text-sm lg:text-base text-white pb-4'> Contributed to the Business Requirements Document (BRD) for the SEP DAY-NULM initiative.</p>
                        <h4 class='text-base text-orange-800 font-semibold'>Key Responsibilities</h4>
                        <ul class='text-sm list-disc ml-6 text-white'>
                            <li>Participated in research, design, and fieldwork for web development projects.</li>
                            <li>Assisted in developing user interfaces, software interfaces, and communication protocols.</li>
                            <li>Collaborated on defining system features, functional requirements, and use cases.</li>
                            <li>Documented key aspects like operating environments, user characteristics, and non-functional requirements, including performance and security standards.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Experience