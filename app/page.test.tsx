import { render, screen } from '@testing-library/react';
import HeroPage from './page';
import '@testing-library/jest-dom';

describe('Hero Component', () => {
    it('should render the main heading properly', () => {
        render(<HeroPage />);
        const heading = screen.getByRole("heading", { name: /hi, i'm khizr/i });
        expect(heading).toBeInTheDocument();
    });
    it('should render the subheading properly', () => {
        render(<HeroPage />);
        const subheading = screen.getByText(/junior full-stack developer/i);
        expect(subheading).toBeInTheDocument();
    });
    it('should render the button with correct text and link', () => {
        render(<HeroPage/>);
        const viewMyWorkButton = screen.getByRole('link', { name: 'View My Work' });
        expect(viewMyWorkButton).toBeInTheDocument();
        expect(viewMyWorkButton).toHaveAttribute('href','/projects');
    })
});
