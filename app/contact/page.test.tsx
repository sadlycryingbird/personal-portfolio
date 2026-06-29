import { render, screen } from '@testing-library/react';
import ContactPage from './page';
import '@testing-library/jest-dom';

describe('Contact Component', () => {
    it("renders Get in Touch correctly", () => {
        render(<ContactPage />);
        expect(screen.getByRole("heading", { level: 2, name: /Get in Touch/i })).toBeInTheDocument();
    });
    it('should render the Email button with correct text and link', () => {
        render(<ContactPage />);
        const emailButton = screen.getByRole('link', { name: 'Email' });
        expect(emailButton).toBeInTheDocument();
        expect(emailButton).toHaveAttribute('href','mailto:khizr1998@gmail.com');
    })
    it('should render the LinkedIn button with correct text and link', () => {
        render(<ContactPage />);
        const linkedInButton = screen.getByRole('link', { name: 'LinkedIn' });
        expect(linkedInButton).toBeInTheDocument();
        expect(linkedInButton).toHaveAttribute('href','https://linkedin.com/in/khizr-fazal');
    })
    it('should render the GitHub button with correct text and link', () => {
        render(<ContactPage />);
        const gitHubButton = screen.getByRole('link', { name: 'GitHub' });
        expect(gitHubButton).toBeInTheDocument();
        expect(gitHubButton).toHaveAttribute('href','https://github.com/sadlycryingbird/');
    })
});