import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar'; 
import '@testing-library/jest-dom';

describe('Navbar', () => {
    const navLinks: Record<string, string> = {
        'About': '/about',
        'Home': '/',
        'Projects': '/projects',
        'Contact': '/contact',
    };

    //it.each() used for readability, DRY approach
    it.each(Object.entries(navLinks))('should render the "%s" link with href "%s"', (linkText, expectedHref) => {
        render(<Navbar />);

        // Find the link by role and text
        const linkElement = screen.getByRole('link', { name: linkText });

        // Verify the link is in the document
        expect(linkElement).toBeInTheDocument();

        // Check if the link has the correct href
        expect(linkElement).toHaveAttribute('href', expectedHref);
    });
});