// src/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';
import templateConfig from '../templateConfig';

test('renders the Home component', () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const headerElement = screen.getByText(`Welcome to the ${templateConfig.site.name}`);
  expect(headerElement).toBeInTheDocument();
});

test('has navigation links', () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const aboutUsLink = screen.getByRole('link', { name: /About Us/i });
  expect(aboutUsLink).toBeInTheDocument();
  const eventsLink = screen.getByRole('link', { name: /Events/i });
  expect(eventsLink).toBeInTheDocument();
});
