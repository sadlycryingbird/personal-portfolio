import { render, screen } from '@testing-library/react';
import Layout from '../layout'; // Adjust the path if needed
import '@testing-library/jest-dom';

// Mock child component
const MockChild = () => <div data-testid="mock-child">Mock Content</div>;

describe('Layout', () => {
  it('should render Navbar, children, and Footer in correct order', () => {
    render(
      <Layout>
        <MockChild />
      </Layout>
    );

    // Ensure Navbar exists
    const navbar = screen.getByRole('banner'); // Assuming <nav role="banner">
    expect(navbar).toBeInTheDocument();

    // Ensure MockChild (Children) exists
    const child = screen.getByTestId('mock-child');
    expect(child).toBeInTheDocument();

    // Ensure Footer exists
    const footer = screen.getByRole('contentinfo'); // Assuming <footer role="contentinfo">
    expect(footer).toBeInTheDocument();

    // Check the correct order in the DOM
    expect(navbar.compareDocumentPosition(child)).toBe(4); // Navbar comes before Children
    expect(child.compareDocumentPosition(footer)).toBe(4); // Children come before Footer
  });
});