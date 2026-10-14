import React from 'react'
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import pro1img from '../assets/CodeGPT.jpeg';
import pro2img from '../assets/Nikrproject.jpeg';
import pro3img from '../assets/VotingSystemPython.jpeg';
import urlshortner from '../assets/urlshortner.png';
import projecthub from '../assets/projecthub.png';

const projects = [
  {
    name: 'ProjectHub',
    image: projecthub,
    github: 'https://github.com/SaiBende/Project-Hub',
    live : 'https://project-hub.saibende.in',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    description:
      'Developed a comprehensive project management web application using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. The application provides a user-friendly interface for managing projects, tasks, and team collaboration. Key features include user authentication, project creation and management, task assignment, and real-time updates. The application is designed to enhance productivity and streamline project workflows.',
  },
  {
    name: 'URL Shortener WebSite',
    image: urlshortner,
    github: 'https://github.com/SaiBende/URL_Shortner',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    description:
      'Developed a URL shortener web application utilizing the MERN stack, consisting of MongoDB, Express.js, React.js, and Node.js. The application offers a seamless and interactive user experience, built with React.js for a responsive and intuitive interface. Server-side operations and API requests are efficiently handled using Node.js and Express.js, while MongoDB ensures efficient data storage and retrieval. Key features include the ability to shorten long URLs, track usage statistics, and manage links through a user-friendly interface, allowing users to view, edit, and delete their shortened URLs.',
  },
  {
    name: 'Nike Clone',
    image: pro2img,
    live: 'https://nike-sai-bende.vercel.app/',
    tags: ['React', 'Tailwind CSS'],
    description:
      'This project is a clone of the Nike website that displays the latest shoes collection of the brand. I used React.js and Tailwind CSS to create a responsive and user-friendly website that works well on different devices and browsers.',
  },
  {
    name: 'CodeGPT',
    image: pro1img,
    github: 'https://github.com/SaiBende/CodeGPT',
    tags: ['Python', 'OpenAI API', 'Tkinter'],
    description:
      'This project is a chatbot that uses the OpenAI ChatCompletion API to assist in software development. The chatbot can provide code snippets or suggest solutions for a given programming problem, identify and explain errors in provided code, and offer guidance on best practices, coding conventions, and optimization techniques. The chatbot is based on the gpt-3.5-turbo model, which is a large language model trained on a variety of text sources, including code. The project is implemented in Python, using the tkinter library for creating a graphical user interface.',
  },
  {
    name: 'Python Voting Machine',
    image: pro3img,
    github: 'https://github.com/SaiBende/Voting-System-Python',
    tags: ['Python', 'Tkinter', 'PIL'],
    description:
      'Voting Machine application built in Python. It uses the Tkinter library for the GUI, PIL for image handling, and a custom database module for data operations. The application allows voters to log in, select a poll and district, and submit their vote. It also includes checks for voter ID validation and vote submission.',
  },
];

function Projects() {
  return (
    <section id='Projects' className='bg-black py-16'>
      <div className='mx-auto max-w-7xl px-6'>
        <SectionHeading>My Projects</SectionHeading>

        <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            /* % 3 so each row cascades left-to-right instead of all at once */
            <ProjectCard key={project.name} delay={(index % 3) * 110} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
