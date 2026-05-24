import React from 'react';
import { render, screen } from '@testing-library/react';
import Team from './Team';
import teamMembers from '../../content/team.json';

test('renders team members from content', () => {
  render(<Team />);

  expect(screen.getByRole('heading', { name: /Team/i })).toBeInTheDocument();
  expect(screen.getByText(teamMembers[0].name)).toBeInTheDocument();
  expect(screen.getByText(teamMembers[0].role)).toBeInTheDocument();
});
