// components/Section.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from './Animation';

const Section = styled(motion.section)`
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #333;
  }

  p {
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
    color: #555;
  }

  .grid {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;

    .card {
      background: #f9f9f9;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      max-width: 300px;
      text-align: left;

      h3 {
        margin-bottom: 0.5rem;
        color: #42b883;
      }

      p {
        color: #666;
      }

      &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;
      }
    }
  }
`;

const SectionComponent = ({ id, title, content }) => (
  <Section id={id} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
    <h2>{title}</h2>
    <div className="grid">
      {content.map((item, index) => (
        <div className="card" key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default SectionComponent;
