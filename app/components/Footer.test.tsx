import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  it('should display the correct copyright text', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(/© 202\d Khizr Fazal/i)).toBeInTheDocument();
  });

  const footerLinks: Record<string,string> = {
    'Github': 'https://github.com/khizrfazal',
    'LinkedIn': 'https://linkedin.com/in/khizr-fazal',
    'Contact': '/contact'
  }

  it.each(Object.entries(footerLinks))('should render the "%s" link with href "%s"', (linkText, expectedHref) => {
          render(<Footer />);
          const LinkElement = screen.getByRole('link', {name: linkText});
          expect(LinkElement).toBeInTheDocument();
          expect(LinkElement).toHaveAttribute('href', expectedHref);
  })
});