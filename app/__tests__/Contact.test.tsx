import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';
import '@testing-library/jest-dom';

describe('Contact Component', () => {
    it("renders Get in Touch correctly", () => {
        render(<Contact />);
        expect(screen.getByRole("heading", { level: 2, name: /Get in Touch/i })).toBeInTheDocument();
    });
    it('should render the Email button with correct text and link', () => {
        render(<Contact />);
        // Find the link by role and text
        const emailButton = screen.getByRole('link', { name: 'Email' });
        expect(emailButton).toBeInTheDocument();
        expect(emailButton).toHaveAttribute('href','mailto:khizr1998@gmail.com');
    })
    it('should render the LinkedIn button with correct text and link', () => {
        render(<Contact />);
        // Find the link by role and text
        const linkedInButton = screen.getByRole('link', { name: 'LinkedIn' });
        expect(linkedInButton).toBeInTheDocument();
        expect(linkedInButton).toHaveAttribute('href','https://linkedin.com/in/khizr-fazal');
    })
    it('should render the GitHub button with correct text and link', () => {
        render(<Contact />);
        // Find the link by role and text
        const gitHubButton = screen.getByRole('link', { name: 'GitHub' });
        expect(gitHubButton).toBeInTheDocument();
        expect(gitHubButton).toHaveAttribute('href','https://github.com/sadlycryingbird/');
    })
});