import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const EMAIL = 'bendesai5703@gmail.com';
const COLLEGE_EMAIL = '2021bit011@sggs.ac.in';
const PHONE_DISPLAY = '+91 89755 55385';
const PHONE_LINK = 'tel:+918975555385';

/**
 * EmailJS credentials.
 *
 * The defaults below keep the form working out of the box, but you can change
 * any of them without touching this file by adding a `.env` file next to
 * package.json (or by setting the same variables in your host's dashboard):
 *
 *   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
 *   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
 *   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
 *
 * All three are meant to be public (they are shipped to the browser); they are
 * NOT secrets. Your EmailJS *private* key must never be used here.
 */
const EMAILJS = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_wxvkocg',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_dl0emtp',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'P92rm0l0DnH5awtKX',
};

const contactDetails = [
    {
        Icon: FaLocationDot,
        label: 'Location',
        value: 'Vazirabad, Nanded, Maharashtra, India',
    },
    {
        Icon: FaEnvelope,
        label: 'Email',
        value: EMAIL,
        href: `mailto:${EMAIL}`,
    },
    {
        Icon: FaEnvelope,
        label: 'College Email',
        value: COLLEGE_EMAIL,
        href: `mailto:${COLLEGE_EMAIL}`,
    },
    {
        Icon: FaPhone,
        label: 'Phone',
        value: PHONE_DISPLAY,
        href: PHONE_LINK,
    },
];

const inputClasses =
    'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors duration-300 focus:border-orange-600 focus:ring-1 focus:ring-orange-600';

const labelClasses = 'mb-2 block text-sm font-medium text-gray-300';

function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState(null); // { type: 'success' | 'error', message }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (sending) return;

        setSending(true);
        setStatus(null);

        emailjs
            .sendForm(EMAILJS.serviceId, EMAILJS.templateId, form.current, {
                publicKey: EMAILJS.publicKey,
            })
            .then(() => {
                setStatus({
                    type: 'success',
                    message:
                        'Message sent successfully! Thanks for reaching out — I will get back to you soon.',
                });
                setFormData({ user_name: '', user_email: '', message: '' });
            })
            .catch((error) => {
                // EmailJS rejects with an EmailJSResponseStatus whose `text`
                // holds the human-readable reason (for example an invalid
                // service ID), which used to be swallowed by console.log.
                const reason = error?.text || error?.message || 'Unknown error';
                console.error('EmailJS error:', error);
                setStatus({
                    type: 'error',
                    message: `Message could not be sent — ${reason}. Please email me directly at ${EMAIL}.`,
                });
            })
            .finally(() => setSending(false));
    };

    return (
        <section id='ContactMe' className='w-full bg-black py-16'>
            <div className='mx-auto max-w-6xl px-5'>
                <SectionHeading>Contact Me</SectionHeading>

                <div className='mt-12 grid items-start gap-6 lg:grid-cols-2'>
                    {/* Intro + contact details */}
                    <Reveal y={32} className='rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8'>
                        <h3 className='font-heading text-2xl font-bold text-white'>
                            Let&rsquo;s Connect
                        </h3>
                        <p className='mt-4 text-base leading-relaxed text-gray-400 text-justify'>
                            As a passionate software developer, I&rsquo;ve always believed in the power
                            of connection. Whether it&rsquo;s through code or conversation, I&rsquo;m
                            all about building bridges. If you&rsquo;re interested in discussing a
                            project, an idea, or if you just want to chat about the latest tech trends,
                            I&rsquo;m just a call or visit away. You can find my contact details below.
                            Looking forward to connecting with you!
                        </p>

                        <ul className='mt-8 space-y-5'>
                            {contactDetails.map(({ Icon, label, value, href }) => (
                                <li key={label} className='flex items-start gap-4'>
                                    <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-orange-600/30 bg-orange-600/10 text-orange-500'>
                                        <Icon className='h-5 w-5' aria-hidden='true' />
                                    </span>
                                    <div className='min-w-0'>
                                        <p className='text-xs font-semibold uppercase tracking-wider text-gray-500'>
                                            {label}
                                        </p>
                                        {href ? (
                                            <a
                                                href={href}
                                                className='break-all text-sm text-gray-200 transition-colors hover:text-orange-500'
                                            >
                                                {value}
                                            </a>
                                        ) : (
                                            <p className='text-sm text-gray-200'>{value}</p>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    {/* Contact form */}
                    <Reveal delay={140} y={32} className='rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8'>
                        <h3 className='font-heading text-2xl font-bold text-white'>
                            Ready to Get Started?
                        </h3>

                        <form ref={form} onSubmit={sendEmail} className='mt-6 space-y-5'>
                            {/*
                             * Extra (hidden) template variable so the EmailJS
                             * template can reply straight to the visitor, e.g. by
                             * setting its "Reply To" field to {{reply_to}}.
                             */}
                            <input
                                type='hidden'
                                name='reply_to'
                                value={formData.user_email}
                                readOnly
                            />

                            <div>
                                <label htmlFor='name' className={labelClasses}>
                                    Name
                                </label>
                                <input
                                    id='name'
                                    name='user_name'
                                    type='text'
                                    required
                                    autoComplete='name'
                                    placeholder='Your name'
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    className={inputClasses}
                                />
                            </div>

                            <div>
                                <label htmlFor='email' className={labelClasses}>
                                    Email
                                </label>
                                <input
                                    id='email'
                                    name='user_email'
                                    type='email'
                                    required
                                    autoComplete='email'
                                    placeholder='your@email.com'
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    className={inputClasses}
                                />
                            </div>

                            <div>
                                <label htmlFor='message' className={labelClasses}>
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows='5'
                                    required
                                    placeholder='Write your message...'
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`${inputClasses} resize-y`}
                                />
                            </div>

                            {status && (
                                <p
                                    role={status.type === 'error' ? 'alert' : 'status'}
                                    aria-live='polite'
                                    className={
                                        status.type === 'error'
                                            ? 'rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300'
                                            : 'rounded-lg border border-orange-600/30 bg-orange-600/10 px-4 py-3 text-sm text-orange-300'
                                    }
                                >
                                    {status.message}
                                </p>
                            )}

                            <button
                                type='submit'
                                disabled={sending}
                                className='w-full rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60'
                            >
                                {sending ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export default Contact;
