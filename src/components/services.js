import React from 'react';
import { FaCode, FaSketch, FaAndroid } from 'react-icons/fa';

import Title from './title';

const servicesList = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: 'web development',
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: 'web design',
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: 'app design',
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
];

const Services = () => (
  <section className="section bg-grey">
    <Title title="services" />

    <div className="section-center services-center">
      {servicesList.map(({ id, icon, title, text }) => (
        <article key={id} className="service">
          {icon}
          <h4>{title}</h4>
          <div className="underline" />
          <p>{text}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Services;
