/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
      <Subheader>Learn, Connect, and Grow in the Field of Cybersecurity</Subheader>
      <Paragraph>
        Our club is dedicated to providing resources, events, and a community for
        individuals interested in cybersecurity. Whether you're a beginner or an
        experienced professional, you'll find valuable information and opportunities
        to enhance your skills and knowledge.
      </Paragraph>
      <Navigation>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/join-us">Join Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Navigation>
    </HomePage>
  );
};

export default Home;
