// components/Features.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FeaturesContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 2rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const FeatureBox = styled(motion.div)`
  background: linear-gradient(145deg, #ffffff, #f4f4f4);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1), -4px -4px 15px rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.3);
  }
`;

const FeatureTitle = styled.h2`
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1.125rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

const Features = () => {
  const features = [
    {
      title: 'My Profile',
      description: 'I am a passionate developer always eager to learn and improve. I am constantly working on expanding my knowledge in various technologies to create impactful solutions.',
    },
    {
      title: '이런 개발자가 되고싶어요',
      description: 'I aspire to be a full-stack developer with expertise in React, Node.js, and database management. I want to create user-friendly applications that solve real-world problems.ddddddddddddddddddddd. dddddddddddddddddddddddddddddddddddfdfdfdfdfdfdfdfdfdfdfdfd. fdfdfdfdfdfdfd',
    },
  ];

  return (
    <FeaturesContainer>
      <Title>Features</Title>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureBox
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureBox>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default Features;
