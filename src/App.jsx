// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Stack from "./components/Stack";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // 스크롤 위치를 추적하는 useEffect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 특정 id로 스크롤 이동
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" // 섹션의 시작 부분으로 스크롤 이동
      });
    }
  };
  

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <Home scrollPosition={scrollPosition} />
      <Projects />
      <Features />
      <Stack />
      <Footer />
    </>
  );
};

export default App;
