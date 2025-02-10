import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import '@testing-library/jest-dom';
import { ObjectFlags } from 'typescript';

describe('Footer', () => {
  it('should display the correct copyright text', () => {
    render(<Footer />);
    
    // Dynamically get the current year
    const currentYear = new Date().getFullYear();
    
    // Expect the copyright text to be in the document
    expect(screen.getByText(/© 202\d Khizr Fazal/i)).toBeInTheDocument();

  });

  const footerLinks: Record<string,string> = {
    'Github': 'https://github.com/sadlycryingbird',
    'LinkedIn': 'https://linkedin.com/in/khizr-fazal',
    'Contact': '/contact'
  }

  it.each(Object.entries(footerLinks))('should render the "%s" link with href "%s"', (linkText, expectedHref) => {
          render(<Footer />);

          // Find the Link by role and text
          const LinkElement = screen.getByRole('link', {name: linkText});

          // Verify the Link is in the document
          expect(LinkElement).toBeInTheDocument();

          // Check if the Link has the correct href
          expect(LinkElement).toHaveAttribute('href', expectedHref);
  })
});