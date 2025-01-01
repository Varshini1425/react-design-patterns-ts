import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';
import '@testing-library/jest-dom';


test('renders HelloWorld component with the correct name', () => {
  render(<HelloWorld name="World" />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});
