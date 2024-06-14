/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterContent = styled.div`
  p {
    margin: 5px 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>© 2024 Cybersecurity Club</p>
        <p>Email: info@cyberclub.org</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 1234 Cyber Lane, Tech City, TC 56789</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
