// src/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders the Home component', () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const headerElement = screen.getByText(/Welcome to the Cybersecurity Club/i);
  expect(headerElement).toBeInTheDocument();
});

test('has navigation links', () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const aboutUsLink = screen.getByText(/About Us/i);
  expect(aboutUsLink).toBeInTheDocument();
  const eventsLink = screen.getByText(/Events/i);
  expect(eventsLink).toBeInTheDocument();
});
