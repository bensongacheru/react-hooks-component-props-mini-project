import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';


test('renders the correct child components', () => {
  const { container } = render(<App />);
  expect(container.querySelector('.App')).toBeInTheDocument();
  expect(container.querySelector('.App header')).toBeInTheDocument();
  expect(container.querySelector('main')).toBeInTheDocument();
  
  // Additional checks to ensure the ArticleList and its contents are rendered
  expect(container.querySelector('main')).toHaveTextContent('First Post');
  expect(container.querySelector('main')).toHaveTextContent('Second Post');
});
test('renders posts correctly', () => {
  const testPosts = [
    { id: 1, title: 'Test Post 1', content: 'Content for post 1' },
    { id: 2, title: 'Test Post 2', content: 'Content for post 2' },
  ];
  
  const { getByText } = render(<ArticleList posts={testPosts} />);
  
  testPosts.forEach(post => {
    expect(getByText(post.title)).toBeInTheDocument();
    expect(getByText(post.content)).toBeInTheDocument();
  });
});

