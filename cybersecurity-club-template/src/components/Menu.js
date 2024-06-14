import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

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
        <nav>
          <ul style={menuStyle}>
            <li style={menuItemStyle}>
              <Link to="/">Home</Link>
            </li>
            <li style={menuItemStyle}>
              <Link to="/about-us">About Us</Link>
            </li>
            <li style={menuItemStyle}>
              <Link to="/events">Events</Link>
            </li>
            <li style={menuItemStyle}>
              <Link to="/resources">Resources</Link>
            </li>
            <li style={menuItemStyle}>
              <Link to="/join-us">Join Us</Link>
            </li>
            <li style={menuItemStyle}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

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
