import React from 'react';
import { render, screen } from '@testing-library/react';
import CreatePost from './CreatePost';

test('CreatePost renders ', () => {
  render(<CreatePost />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
