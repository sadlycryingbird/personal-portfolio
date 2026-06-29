import { render, screen } from "@testing-library/react";
import AboutPage from "./page";

describe("About Page", () => {
  it("renders all headings properly and accurately", () => {
    render(<AboutPage />);
    expect(screen.getAllByRole("heading").find((h) => h.textContent === "About Me")).toBeInTheDocument();
    expect(screen.getAllByRole("heading").find((h) => h.textContent === "My Experience")).toBeInTheDocument();
    expect(screen.getAllByRole("heading").find((h) => h.textContent === "Let's Connect")).toBeInTheDocument();
  });

  it("renders all paragraph texts correctly", () => {
    render(<AboutPage />);
    expect(screen.getByText(/Software Developer with over 2.5 years/i)).toBeInTheDocument();
    expect(screen.getByText(/open to new opportunities/i)).toBeInTheDocument();
  });

  it("renders the bullet points under My Experience properly", () => {
    render(<AboutPage />);
    expect(screen.getByText(/Java & Spring Boot/i)).toBeInTheDocument();
    expect(screen.getByText(/Next.js & TypeScript/i)).toBeInTheDocument();
    expect(screen.getByText(/Production Debugging/i)).toBeInTheDocument();
    expect(screen.getByText(/Collaboration/i)).toBeInTheDocument();
    expect(screen.getByText(/Exposure to AWS Lambda/i)).toBeInTheDocument();
  });
});