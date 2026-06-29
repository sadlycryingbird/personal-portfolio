import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("renders correct copyright text", () => {
    const year = new Date().getFullYear();

    expect(
      screen.getByText(new RegExp(`© ${year} Khizr Fazal`, "i"))
    ).toBeInTheDocument();
  });

  it.each([
    ["GitHub", "https://github.com/khizrfazal"],
    ["LinkedIn", "https://linkedin.com/in/khizr-fazal"],
    ["Contact", "/contact"],
  ])("renders %s link with correct href", (name, href) => {
    const link = screen.getByRole("link", { name });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", href);
  });
});