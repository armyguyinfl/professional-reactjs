import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders testing text', () => {
  render(<Main />);
  const testText = screen.getByText(/This is the main/i);
  expect(testText).toBeInTheDocument();
});
