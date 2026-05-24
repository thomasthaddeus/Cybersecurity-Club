/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import templateConfig from '../templateConfig';

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
        <p>© {templateConfig.site.year} {templateConfig.site.name}</p>
        <p>Email: {templateConfig.contact.email}</p>
        <p>Phone: {templateConfig.contact.phone}</p>
        <p>Address: {templateConfig.contact.address}</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
