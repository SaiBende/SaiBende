import React from 'react'
import interncomplogo from '../assets/interncomplogo.jpeg';
import hangukverseLogo from '../assets/lumantara_logo.jpg';
import ogHome from '../assets/og-home.png';

function Experience() {
    return (


        <>  <section id='Experience' className='experience bg-black w-full'>
            <div class="bg-black flex flex-col justify-center items-center w-full  p-5">
                <h1 className='text-white text-4xl  justify-center text-center underline font-bold py-4'> My Experience
                </h1>


                
                <div class='flex flex-col items-center justify-between bg-black dark:bg-black-800 shadow-md shadow-gray-300 text-white dark:text-white border border-gray-200 dark:border-gray-600 w-full md:w-8/12 mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4'>
                    <div class='w-full flex flex-col items-center justify-center mb-3'>
                        <a href='https://hangukverse.com' target='_blank' rel='noreferrer' class='block mb-2'>
                            <img class='w-full max-w-md rounded-xl border border-white shadow-lg' src={ogHome} alt='HangukVerse Preview' />
                        </a>
                        <p class='text-sm md:text-base text-cyan-200 underline'><a href='https://hangukverse.com' target='_blank' rel='noreferrer'>hangukverse.com</a></p>
                    </div>
                    <div class='w-full flex items-center justify-between'>
                        <div class='flex items-center justify-center px-2 md:px-6'>
                            <img class='w-16 rounded-full ring-2 ring-purple-600 shadow-lg shadow-purple-600 m-2 md:block sm:flex-col' src={hangukverseLogo} alt="HangukVerse" />
                            <div class='text-left'>
                                <h4 class='text-lg md:text-base font-medium text-white'>Full Stack Developer Intern</h4>
                            </div>
                        </div>
                        <div class='text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500'>
                            <p class='text-sm md:text-base text-white'>Sept 15, 2025 – Present</p>
                            <p class='hidden md:block text-sm md:text-base text-white'>Lumantara Ltd — HangukVerse Platform (Remote)</p>
                        </div>
                    </div>
                    <div class='text-left p-2'>
                        <p class='text-sm lg:text-base text-white pb-4'>Engineered a production-ready Korean culture community platform from Figma concepts to live deployment — full-stack architecture, real-time systems, billing integration, and cloud infrastructure.</p>
                        <h4 class='text-base text-orange-800 font-semibold'>Key Responsibilities</h4>
                        <ul class='text-sm list-disc ml-6 text-white'>
                            <li>Developed 90+ pages across user, community, admin, and content modules using Next.js 16 (App Router), React 19, TypeScript; deployed on Vercel with global edge CDN.</li>
                            <li>Built REST API with Express.js + TypeScript: 20+ route groups, 30+ controllers, layered routes/controllers/services; hosted on Railway, scaled via PM2 clustering.</li>
                            <li>Designed 40+ table PostgreSQL schema on Supabase with PgBouncer, powering posts, communities, chat, subscriptions, events, notifications, and IAP transactions.</li>
                            <li>Integrated Stripe + Razorpay subscriptions with secure webhook handling (raw-body verification + idempotency).</li>
                            <li>Implemented real-time chat (DM + groups), geolocation Nearby Fans map with ghost-mode (React Leaflet + PostGIS), and Webtoon PDF reader with progress sync.</li>
                            <li>Engineered 7-tier API rate limiting, DDoS protection, bot-blocking, JWT auth middleware, and tier-based feature access (Free/Premium/VIP).</li>
                            <li>Set up AWS S3 presigned uploads with policy enforcement and file validation, and Nodemailer transactional email workflows with scheduled subscription cleanup.</li>
                            <li>Delivered admin panel for content moderation, community management, events/surveys, reports, and GDPR-compliant account deletion.</li>
                        </ul>
                    </div>
                </div>
                <div class='flex flex-col items-center justify-between bg-black dark:bg-black-800 shadow-md shadow-gray-300 text-white dark:text-white border border-gray-200 dark:border-gray-600 w-full md:w-8/12 mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4'>
                    <div class='w-full flex items-center justify-between'>
                        <div class='flex items-center justify-center px-2 md:px-6'>
                            <img class='w-16  rounded-full ring-2 ring-orange-600 shadow-lg shadow-orange-600 m-2 md:block sm:flex-col ' src={interncomplogo} alt="" />
                            <div class='text-left '>

                                <h4 class='text-lg md:text-base font-medium text-white'>Web Development and Design Intern</h4>
                            </div>
                        </div>
                        <div class='text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500'>
                            <p class='text-sm md:text-base text-white'> July 5,2024–August 7,2024 </p>
                            <p class="hidden md:block text-sm md:text-base text-white">
                                Ministry of Housing and Urban Affairs, TULIP (The Urban Learning Internship Program)
                            </p>
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