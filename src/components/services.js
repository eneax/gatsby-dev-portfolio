import React from 'react';
import styled from 'styled-components';
import { FaCode, FaSketch, FaAndroid } from 'react-icons/fa';

import Title from './title';

const ServiceWrapper = styled.div`
  @media screen and (min-width: 676px) {
    .services-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .services-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

const ServiceArticle = styled.article`
  background: var(--clr-white);
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: var(--radius);
  text-align: center;
  -webkit-transition: var(--transition);
  transition: var(--transition);

  .service-icon {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .underline {
    width: 3rem;
    height: 0.12rem;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }

  p {
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }

  &:hover {
    background: var(--clr-primary-3);
    color: var(--clr-primary-5);

    p {
      color: var(--clr-primary-5);
    }

    .underline {
      background: var(--clr-primary-5);
    }
  }
`;

// data
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
  <ServiceWrapper className="section bg-grey">
    <Title title="services" />

    <div className="section-center services-center">
      {servicesList.map(({ id, icon, title, text }) => (
        <ServiceArticle key={id}>
          {icon}
          <h4>{title}</h4>
          <div className="underline" />
          <p>{text}</p>
        </ServiceArticle>
      ))}
    </div>
  </ServiceWrapper>
);

export default Services;
