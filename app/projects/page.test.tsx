import { render, screen } from '@testing-library/react';
import ProjectsPage from './page';
import '@testing-library/jest-dom';

describe('Projects Component', () => {
  it("renders the World Builder project title properly", () => {
    render(<ProjectsPage />);
    expect(screen.getByRole("heading", { level: 3, name: /world builder/i })).toBeInTheDocument();
  });

  it("renders all lines of text correctly", () => {
    render(<ProjectsPage />);
    expect(screen.getByText(/A story-building tool for creating worlds, characters, relationships, and lore/i)).toBeInTheDocument();
  });

  it("should render the button with correct text and link", () => {
    render(<ProjectsPage />);
    const viewOnGithubButton = screen.getByRole('link', { name: 'View on GitHub' });
    expect(viewOnGithubButton).toBeInTheDocument();
    expect(viewOnGithubButton).toHaveAttribute('href','https://github.com/sadlycryingbird/world-builder');
  });
});
