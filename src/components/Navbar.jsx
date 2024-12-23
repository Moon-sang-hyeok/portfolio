// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1a1a1a;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;

  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;

    &:hover {
      color:rgb(9, 132, 233);
    }
  }
`;

const NavbarComponent = ({ scrollToSection }) => (
  <Navbar>
    <div>Moon Portfolio</div>
    <div>
      <a onClick={() => scrollToSection("home")}>Home</a>
      <a onClick={() => scrollToSection("projects")}>Projects</a>
      <a onClick={() => scrollToSection("features")}>Features</a>
      <a onClick={() => scrollToSection("stack")}>Stack</a>
      <a onClick={() => scrollToSection("contact")}>Contact</a>
    </div>
  </Navbar>
);

export default NavbarComponent;
