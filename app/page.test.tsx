import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

describe("Hero Component", () => {
  it("renders main heading correctly", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /khizr fazal/i })
    ).toBeInTheDocument();
  });

  it("renders subheading correctly", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /backend-focused software engineer/i,
      })
    ).toBeInTheDocument();
  });

  it("renders description text correctly", () => {
    render(<Home />);

    const description = screen.getByText(
      /i build reliable backend systems and modern web applications/i
    );

    expect(description).toBeInTheDocument();
  });

  it("renders View Projects button correctly", () => {
    render(<Home />);

    const button = screen.getByRole("link", {
      name: /view projects/i,
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/projects");
  });

  it("renders Contact Me button correctly", () => {
    render(<Home />);

    const button = screen.getByRole("link", {
      name: /contact me/i,
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/contact");
  });

  it("renders tech stack items correctly", () => {
    render(<Home />);

    const techStack = [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Docker",
    ];

    techStack.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });
});