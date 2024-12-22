import React, { useState } from 'react';
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
    transition: { duration: 3, ease: 'easeInOut' },
  },
};

const dotVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const paths = [
  'M 0 0 C 100 300, 400 300, 400 300', // 첫 번째 경로
  'M 0 200 C 100 300, 400 300, 400 300', // 두 번째 경로
  'M 0 400 C 100 300, 400 300, 400 300', // 세 번째 경로
  'M 0 600 C 100 300, 400 300, 400 300', // 네 번째 경로
  'M 400 300 C 400 300, 400 300, 800 300', // 마지막 오른쪽 경로
];

const Hero = () => {
  const [pathsComplete, setPathsComplete] = useState(false); // 경로가 완료되었는지 상태 확인

  // 마지막 경로 애니메이션을 트리거하는 함수
  const handlePathAnimationComplete = () => {
    setPathsComplete(true); // 경로가 완료되었을 때 호출
  };

  return (
    <CircuitContainer>
      <CircuitSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
        {/* 경로들 */}
        {paths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke="#42b883"
            strokeWidth="2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            // 마지막 경로에만 delay 설정
            transition={{
              duration: 3,
              ease: 'easeInOut',
              // 마지막 경로에 delay를 적용하여 다른 경로들이 끝난 후에 시작
              delay: index === paths.length - 1 && pathsComplete ? 0 : 3 * index,
            }}
            onAnimationComplete={index === paths.length - 1 ? handlePathAnimationComplete : undefined} // 마지막 경로가 완료되면 상태 변경
          />
        ))}

        {/* 점들이 경로를 따라 이동 */}
        {paths.map((path, index) => (
          <motion.circle
            key={index}
            cx="0" // 점의 초기 위치
            cy="0"
            r="10" // 점 크기 증가
            fill="#42b883" // 점 색상 설정
            variants={dotVariants}
            initial="hidden"
            animate={{
              motionPath: path, // 경로를 따라 점이 이동하도록 설정
            }}
            transition={{
              duration: 3, // 애니메이션 속도
              delay: index * 0.5, // 각 점의 애니메이션 지연 시간
              ease: 'easeInOut',
            }}
          />
        ))}
      </CircuitSVG>
    </CircuitContainer>
  );
};

export default Hero;
