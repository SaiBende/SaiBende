import React from 'react';
import Reveal from './Reveal';
import jscerti from '../assets/jscerti_page-0001.jpg';
import pythoncerti from '../assets/pythoncer_page-0001.jpg';
import htmlcsscerti from '../assets/htmlcsscerti_page-0001.jpg';
import googlecerti from '../assets/Copy of certi Sai Rajesh Bende_page-0001.jpg';
import InternshipCertificate from '../assets/InternshipCertificate.png';
import AWS_Cloud_Practitioner_Essentials from '../assets/AWS_Cloud_Practitioner_Essentials.png';

const certificates = [
  { src: AWS_Cloud_Practitioner_Essentials, alt: 'AWS Cloud Practitioner Essentials certificate' },
  { src: jscerti, alt: 'JavaScript certificate' },
  { src: pythoncerti, alt: 'Python certificate' },
  { src: googlecerti, alt: 'Google certificate' },
  { src: InternshipCertificate, alt: 'Internship certificate' },
  { src: htmlcsscerti, alt: 'HTML and CSS certificate' },
];

function Certificates() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {certificates.map((cert, index) => (
        <Reveal as="li" key={cert.alt} delay={index * 70} y={16}>
          {/* Opens the full-resolution certificate in a new tab */}
          <a
            href={cert.src}
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] transition-colors duration-300 hover:border-orange-600/40"
            title="View certificate"
          >
            <img
              src={cert.src}
              alt={cert.alt}
              loading="lazy"
              decoding="async"
              className="h-44 w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
            />
          </a>
        </Reveal>
      ))}
    </ul>
  );
}

export default Certificates;
