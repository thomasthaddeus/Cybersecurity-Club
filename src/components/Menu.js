/** @jsxImportSource @emotion/react */
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled from '@emotion/styled';

// Define the components for each page
const Home = () => <h2>Home Page</h2>;
const AboutUs = () => <h2>About Us Page</h2>;
const Events = () => <h2>Events Page</h2>;
const Resources = () => <h2>Resources Page</h2>;
const JoinUs = () => <h2>Join Us Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const Menu = () => {
  return (
    <Router>
      <div>
        <Nav>
          <MenuList>
            <MenuItem>
              <StyledLink to="/">Home</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/about-us">About Us</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/events">Events</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/resources">Resources</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/join-us">Join Us</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/contact">Contact</StyledLink>
            </MenuItem>
          </MenuList>
        </Nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/events" component={Events} />
          <Route path="/resources" component={Resources} />
          <Route path="/join-us" component={JoinUs} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default Menu;

const Nav = styled.nav`
  background-color: #333;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 10px;
`;

const MenuItem = styled.li`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
