import { render, screen } from '@testing-library/react';
import App from './App';
import templateConfig from './templateConfig';

test('renders the club welcome message', () => {
  render(<App />);
  expect(screen.getByText(`Welcome to the ${templateConfig.site.name}!`)).toBeInTheDocument();
});
