// components/Stack.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHtml5, FaVuejs } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { RiVuejsFill } from "react-icons/ri";

const StackContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 3rem;
`;

const StackGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const TechItem = styled(motion.div)`
  position: relative;
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
  width: 150px;
  height: 150px;
  margin: 1rem;
`;

const TechIcon = styled(motion.div)`
  font-size: 5rem;
  transition: transform 0.3s ease;
  margin-bottom: 1rem;

  ${TechItem}:hover & {
    transform: translateY(-10px);
  }
`;

const stackItems = [
  { id: 1, name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
  { id: 2, name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
  { id: 3, name: 'Django', icon: <DiDjango color="#092E20" /> },
  { id: 4, name: 'React', icon: <DiReact color="#61DAFB" /> },
  { id: 5, name: 'Vue', icon: <FaVuejs color="#42b883" /> },
];

const Stack = () => {
  return (
    <StackContainer>
      <Title>My Tech Stack</Title>
      <StackGrid>
        {stackItems.map((tech, index) => (
          <TechItem
            key={tech.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <TechIcon>{tech.icon}</TechIcon>
            {/* <div>{tech.name}</div> */}
          </TechItem>
        ))}
      </StackGrid>
    </StackContainer>
  );
};

export default Stack;
