import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders testing text', () => {
  render(<Header />);
  const testText = screen.getByText(/This is the header/i);
  expect(testText).toBeInTheDocument();
});
