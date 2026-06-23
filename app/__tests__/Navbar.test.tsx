import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar'; 
import '@testing-library/jest-dom';
import { usePathname } from 'next/navigation';

// Mock usePathname so we can simulate different routes
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Navbar Component', () => {
  const navLinks: Record<string, string> = {
    'Home': '/',
    'About': '/about',
    'Projects': '/projects',
    'Contact': '/contact',
  };

  it.each(Object.entries(navLinks))(
    'should render the "%s" link with href "%s"',
    (linkText, expectedHref) => {
      (usePathname as jest.Mock).mockReturnValue('/'); // default route
      render(<Navbar />);
      const linkElement = screen.getByRole('link', { name: linkText });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', expectedHref);
    }
  );

  it('applies the active class to the current route', () => {
    (usePathname as jest.Mock).mockReturnValue('/about');
    render(<Navbar />);
    const activeLink = screen.getByRole('link', { name: 'About' });
    expect(activeLink).toHaveClass('active');
    expect(activeLink).toHaveAttribute('aria-current', 'page');
  });
});