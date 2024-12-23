// components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #1a1a1a;
  color: white;
  font-size: 0.875rem;
`;

const FooterComponent = () => (
  <Footer>
    © 2024 Moon Sang Hyeok. All rights reserved.
  </Footer>
);

export default FooterComponent;
