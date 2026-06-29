import { render, screen } from "@testing-library/react";
import ContactPage from "./page";
import "@testing-library/jest-dom";

describe("Contact Page", () => {
  it("renders main heading", () => {
    render(<ContactPage />);

    expect(
      screen.getByRole("heading", { name: /get in touch/i })
    ).toBeInTheDocument();
  });

  it("renders description text", () => {
    render(<ContactPage />);

    expect(
      screen.getByText(/interested in working together/i)
    ).toBeInTheDocument();
  });

  it("renders email link correctly", () => {
    render(<ContactPage />);

    const email = screen.getByRole("link", { name: /email/i });
    expect(email).toHaveAttribute(
      "href",
      "mailto:khizr1998@gmail.com"
    );
  });

  it("renders LinkedIn link correctly", () => {
    render(<ContactPage />);

    const linkedin = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedin).toHaveAttribute(
      "href",
      "https://linkedin.com/in/khizr-fazal"
    );
  });

  it("renders GitHub link correctly", () => {
    render(<ContactPage />);

    const github = screen.getByRole("link", { name: /github/i });
    expect(github).toHaveAttribute(
      "href",
      "https://github.com/khizrfazal"
    );
  });
});