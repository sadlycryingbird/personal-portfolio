import { render, screen } from "@testing-library/react";
import AboutPage from "./page";
import "@testing-library/jest-dom";

describe("About Page", () => {
  it("renders main heading", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { name: /about me/i })
    ).toBeInTheDocument();
  });

  it("renders introduction paragraphs", () => {
    render(<AboutPage />);
    expect(
      screen.getByText(/software engineer with over 2.5 years/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/clean, maintainable code/i)
    ).toBeInTheDocument();
  });

  it("renders experience section headings", () => {
    render(<AboutPage />);

    expect(
      screen.getByRole("heading", { name: /backend engineering/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /frontend & full-stack development/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /production support & reliability/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /collaboration & engineering practices/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /current focus/i })
    ).toBeInTheDocument();
  });

  it("renders RBAC experience content", () => {
    render(<AboutPage />);
    expect(
      screen.getByText(/role-based access control/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Spring Boot services/i)
    ).toBeInTheDocument();
  });
});