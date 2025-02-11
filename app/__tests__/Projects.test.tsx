import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects';
import '@testing-library/jest-dom';

describe('Projects Component', () => {
    it("renders the Projects section title correctly", () => {
        render(<Projects />);
        
        // Test the <h2> section heading
        expect(screen.getByRole("heading", { level: 2, name: /projects/i })).toBeInTheDocument();
    });

    it("renders all project titles properly", () => {
        render(<Projects />);
        
        // Test the <h3> project title
        expect(screen.getByRole("heading", { level: 3, name: /mood music app/i })).toBeInTheDocument();
    });
   it("renders all lines of text correctly", () => {
        render(<Projects />);
    
        //Testing other paragraph text, p tags and list
        expect(screen.getByText(/Here are some of the projects i've worked on/i)).toBeInTheDocument();
        expect(screen.getByText(/An app that generates a playlist based on your mood/i)).toBeInTheDocument();

    });
    it('should render the button with correct text and link', () => {
        render(<Projects />);
        // Find the link by role and text
        const viewOnGithubButton = screen.getByRole('link', { name: 'View on GitHub' });
        expect(viewOnGithubButton).toBeInTheDocument();
        expect(viewOnGithubButton).toHaveAttribute('href','https://github.com/sadlycryingbird/mood-music-app');
    })
});