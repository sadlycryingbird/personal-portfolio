import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import "@testing-library/jest-dom";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Navbar Component", () => {
  const navLinks: Record<string, string> = {
    Home: "/",
    About: "/about",
    Projects: "/projects",
    Contact: "/contact",
  };

  it.each(Object.entries(navLinks))(
    "renders %s link with correct href",
    (text, href) => {
      (usePathname as jest.Mock).mockReturnValue("/");
      render(<Navbar />);

      const link = screen.getByRole("link", { name: text });

      expect(link).toHaveAttribute("href", href);
    }
  );

  it("highlights active route", () => {
    (usePathname as jest.Mock).mockReturnValue("/about");
    render(<Navbar />);

    const active = screen.getByRole("link", { name: /about/i });

    expect(active).toHaveClass("active");
    expect(active).toHaveAttribute("aria-current", "page");
  });
});