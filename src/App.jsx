// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollPosition={scrollPosition} />
      <Section
        id="features"
        title="Features"
        content={[
          { title: "Fast", description: "Experience blazing-fast load times and performance." },
          { title: "Responsive", description: "Designed to work seamlessly across all devices." },
          { title: "Modern", description: "Built with the latest web technologies for a sleek design." }
        ]}
      />
      <Section
        id="projects"
        title="Projects"
        content={[
          { title: "Project 1", description: "A modern e-commerce platform with advanced features." },
          { title: "Project 2", description: "A responsive portfolio website to showcase creativity." },
          { title: "Project 3", description: "An innovative blog platform with rich user interactions." }
        ]}
      />
      <Section
        id="contact"
        title="Contact"
        content={[
          { title: "Email", description: "asntkdgur04@naver.com" },
          { title: "kakao", description: "asntkdgur04@naver.com" },
        ]}
      />
      <Footer />
    </>
  );
};

export default App;
