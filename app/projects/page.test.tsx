import { render, screen } from "@testing-library/react";
import ProjectsPage from "./page";
import "@testing-library/jest-dom";

describe("Projects Page", () => {
  it("renders main heading", () => {
    render(<ProjectsPage />);

    expect(
      screen.getByRole("heading", { name: /projects/i })
    ).toBeInTheDocument();
  });

  it("renders subtitle text", () => {
    render(<ProjectsPage />);

    expect(
      screen.getByText(/personal projects focused on backend engineering/i)
    ).toBeInTheDocument();
  });

  it("renders World Builder project", () => {
    render(<ProjectsPage />);

    expect(
      screen.getByRole("heading", { name: /world builder/i })
    ).toBeInTheDocument();
  });

  it("renders project description", () => {
    render(<ProjectsPage />);

    expect(
      screen.getByText(/fictional worlds/i)
    ).toBeInTheDocument();
  });

  it("renders GitHub link correctly", () => {
    render(<ProjectsPage />);

    const link = screen.getByRole("link", {
      name: /view on github/i,
    });

    expect(link).toHaveAttribute(
      "href",
      "https://github.com/khizrfazal/world-builder"
    );
  });

  it("renders technology stack", () => {
    render(<ProjectsPage />);

    expect(screen.getByText("Java")).toBeInTheDocument();
    expect(screen.getByText("Spring Boot")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
  });
});