import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

function Contact() {

    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8kcq3zl', 'template_dl0emtp', form.current, 'P92rm0l0DnH5awtKX')
            .then((result) => {
                console.log(result.text);
                swal("Message Send successfully","success");


                setFormData({
                    user_name: '',
                    user_email: '',
                    message: ''
                });
               
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <section class="bg-black " id="ContactMe">
                <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div class="mb-4">
                        <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">

                            <h2
                                class="font-heading mb-4 font-bold tracking-tight text-white underline text-3xl sm:text-5xl">
                                Contact Me
                            </h2>
                           
                        </div>
                    </div>
                    <div class="flex items-stretch justify-center">
                        <div class="grid md:grid-cols-2">
                            <div class="h-full pr-6">
                                <p class="mt-3 mb-12 text-lg text-white dark:text-slate-400 text-justify">
                                As a passionate Software  field , I’ve always believed in the power of connection. Whether it’s through code or conversation, I’m all about building bridges. If you’re interested in discussing a project, an idea, or if you just want to chat about the latest tech trends, I’m just a call or visit away. You can find my contact details below. Looking forward to connecting with you!
                                </p>
                                <ul class="mb-6 md:mb-0">
                                    <li class="flex">
                                        <div class="flex h-10 w-10 items-center justify-center rounded bg-orange-600 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="h-6 w-6">
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                <path
                                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div class="ml-4 mb-4">
                                           
                                            <p class="text-white">Vazirabad , Nanded</p>
                                            <p class="text-white">Maharashtra,India</p>
                                        </div>
                                    </li>
                                    <li class="flex">
                                        <div class="flex h-10 w-10 items-center justify-center rounded bg-orange-600 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="h-6 w-6">
                                                <path
                                                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                                </path>
                                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                                            </svg>
                                        </div>
                                        <div class="ml-4 mb-4">
                                           
                                            <p class="text-white">Mobile: +91 8975555385</p>
                                            <p class="text-white">Mail: 2021bit011@sggs.ac.in</p>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 class="mb-4 text-white text-2xl font-bold">Ready to Get Started?</h2>
                <form id="contactForm" ref={form} onSubmit={sendEmail}>
                    <div class="mb-6">
                        <div class="mx-0 mb-1 sm:mb-4">
                            <div class="mx-0 mb-1 sm:mb-4">
                                <label for="name" class="pb-1 text-xs uppercase tracking-wider"></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    autoComplete="given-name"
                                    placeholder="Your name"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                                />
                            </div>
                            <div class="mx-0 mb-1 sm:mb-4">
                                <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label>
                                <input
                                    type="email"
                                    id="email"
                                    autoComplete="email"
                                    placeholder="Your email address"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                                    name="user_email"
                                />
                            </div>
                        </div>
                        <div class="mx-0 mb-1 sm:mb-4">
                            <label for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label>
                            <textarea
                                id="textarea"
                                name="message"
                                cols="30"
                                rows="5"
                                placeholder="Write your message..."
                                value={formData.message}
                                onChange={handleChange}
                                class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                            ></textarea>
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="submit" value="Send" class="w-full bg-orange-600 text-white px-6 py-3 font-xl rounded-md sm:mb-0">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
                        </div>
                    </div>
                </div>
               
            </section>



        </div>
    )
}

export default Contact