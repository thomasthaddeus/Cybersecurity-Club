import React from 'react';
import { render, screen } from '@testing-library/react';
import CTF from './CTF';
import ctf from '../../content/ctf.json';

test('renders CTF content from configuration', () => {
  render(<CTF />);

  expect(screen.getByRole('heading', { name: ctf.teamName })).toBeInTheDocument();
  expect(screen.getByText(ctf.practicePlatforms[0].name)).toBeInTheDocument();
  expect(screen.getByText(ctf.writeupPolicy)).toBeInTheDocument();
});
