/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import templateConfig from '../templateConfig';

const HomePage = styled.div`
  padding: 20px;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Subheader = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
`;

const Navigation = styled.nav`
  margin-top: 20px;
`;

const NavLink = styled(Link)`
  margin: 0 10px;
  padding: 10px 20px;
  color: white;
  background-color: #333;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #555;
  }
`;

const Home = () => {
  return (
    <HomePage data-testid="home-page">
      <Header>Welcome to the Cybersecurity Club</Header>
      <Subheader>{templateConfig.site.tagline}</Subheader>
      <Paragraph>{templateConfig.home.intro}</Paragraph>
      <Navigation>
        {templateConfig.navigation.filter((item) => item.path !== '/').map((item) => (
          <NavLink key={item.path} to={item.path}>{item.label}</NavLink>
        ))}
      </Navigation>
    </HomePage>
  );
};

export default Home;
