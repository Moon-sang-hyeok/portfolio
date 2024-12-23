import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CircuitContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircuitSVG = styled.svg`
  width: 80%;
  height: 80%;
  max-width: 800px;
  max-height: 800px;
  display: block;
`;

const pathVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 1.5, ease: 'easeInOut' },
  },
};

const paths = [
  'M 0 0 C 100 300, 400 300, 400 300', // 기술
  'M 0 200 C 100 300, 400 300, 400 300', // 열정
  'M 0 400 C 100 300, 400 300, 400 300', // 소통
  'M 0 600 C 100 300, 400 300, 400 300', // 배움
  'M 400 300 C 400 300, 400 300, 800 300',
];

const textPositions = [
  { x: -10, y: 50 },    // 기술
  { x: -10, y: 200 },   // 열정
  { x: -10, y: 400 },   // 소통
  { x: -10, y: 600 },   // 배움
];

const pulseAnimation = {
  // scale: [1, 1.2, 1],
  fill: ['#ffffff', '#cceeff', '#ffffff'],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

const Hero = () => {
  const svgRef = useRef(null);
  const [dotPositions, setDotPositions] = useState(
    paths.map(() => ({ cx: 0, cy: 0, currentLength: 0 }))
  );
  const [pathsComplete, setPathsComplete] = useState(false); // 회로 애니메이션 완료 상태
  const [lastPathReady, setLastPathReady] = useState(false); // 마지막 원 시작 상태

  useEffect(() => {
    if (pathsComplete) {
      const svgElement = svgRef.current;

      if (svgElement) {
        const pathElements = paths.map((_, index) =>
          svgElement.querySelector(`#path-${index}`)
        );

        const interval = setInterval(() => {
          setDotPositions((prevPositions) =>
            prevPositions.map((pos, index) => {
              if (index === paths.length - 1 && !lastPathReady) return pos;

              const path = pathElements[index];
              if (!path) return pos;

              const totalLength = path.getTotalLength();
              let newLength = pos.currentLength + 2; 
              if (newLength > totalLength) newLength = 0;

              const point = path.getPointAtLength(newLength);
              return {
                cx: point.x,
                cy: point.y,
                currentLength: newLength,
              };
            })
          );
        }, 5);

        return () => clearInterval(interval);
      }
    }
  }, [pathsComplete, lastPathReady]);

  useEffect(() => {
    if (pathsComplete) {
      const delay = 1000;
      const timer = setTimeout(() => setLastPathReady(true), delay);

      return () => clearTimeout(timer);
    }
  }, [pathsComplete]);

  // 경로 시작 부분에 텍스트 추가
  const texts = ['기술', '열정', '소통', '배움'];

  return (
    <CircuitContainer>
      <CircuitSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" ref={svgRef}>
        {/* 경로들 */}
        {paths.map((path, index) => (
          <motion.path
            key={index}
            id={`path-${index}`}
            d={path}
            stroke="#ffffff"
            strokeWidth="2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={
              index === paths.length - 1 ? () => setPathsComplete(true) : undefined
            }
          />
        ))}

        {/* 텍스트들 */}
        {texts.map((text, index) => (
          <motion.text
            key={index}
            x={textPositions[index].x}
            y={textPositions[index].y}
            fill="#ffffff"
            fontSize="24"
            fontFamily="Arial, sans-serif"
            dominantBaseline="middle"
            animate={pulseAnimation}
          >
            {text}
          </motion.text>
        ))}

        {/* 점들 */}
        {pathsComplete &&
          dotPositions.map((pos, index) => (
            <motion.circle
              key={index}
              cx={pos.cx}
              cy={pos.cy}
              r="5"
              animate={pulseAnimation}
            />
          ))}
      </CircuitSVG>
    </CircuitContainer>
  );
};

export default Hero;
