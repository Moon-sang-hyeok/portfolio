// components/Projects.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
  width: 100%;
  padding: 3rem 2rem;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #fff;
`;

const ProjectCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const ProjectCard = styled(motion.div)`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px; /* 기본 카드 크기 */
  opacity: 0;

  @media (max-width: 768px) {
    width: 250px; /* 작은 화면에서는 카드 크기 축소 */
  }

  @media (max-width: 480px) {
    width: 100%;  /* 모바일 화면에서는 카드 크기를 화면에 맞게 */
    max-width: 350px; /* 최대 너비 제한 */
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 1rem;
`;

const Projects = () => {
  const [inView, setInView] = useState(false);

  // Intersection Observer를 사용하여 섹션이 뷰포트에 들어왔을 때 상태 업데이트
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.3 } // 30%가 보일 때 애니메이션 시작
    );

    const target = document.getElementById('projects');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  const projects = [
    {
      title: 'Project 1',
      description: 'A modern e-commerce platform with advanced features.',
    },
    {
      title: 'Project 2',
      description: 'A responsive portfolio website to showcase creativity.',
    },
    {
      title: 'Project 3',
      description: 'An innovative blog platform with rich user interactions.',
    },
    {
      title: 'Project 4',
      description: 'A mobile app for task management and productivity.',
    },
  ];

  return (
    <ProjectsContainer id="projects">
      <Title>Projects</Title>
      <ProjectCardsContainer>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: inView ? 0 : 50,  // 스크롤 시 애니메이션 실행
              opacity: inView ? 1 : 0,
            }}
            transition={{
              duration: 1.2,
              delay: index * 0.3,
              type: 'spring',
              stiffness: 100,
            }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectCardsContainer>
    </ProjectsContainer>
  );
};

export default Projects;
