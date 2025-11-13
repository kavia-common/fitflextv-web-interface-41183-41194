import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FitFlexTV brand', () => {
  render(<App />);
  const brand = screen.getByText(/FitFlexTV/i);
  expect(brand).toBeInTheDocument();
});
