import { render, screen } from "@testing-library/react";
import About from '../components/About';

describe("About Page", () => {
    it("renders all headings properly and accurately", () => {
    render(<About />);
    
    // Get all headings and find the one that matches each expected text
    expect(screen.getAllByRole("heading").find(h => h.textContent === "About Me")).toBeInTheDocument();
    expect(screen.getAllByRole("heading").find(h => h.textContent === "My Experience")).toBeInTheDocument();
    expect(screen.getAllByRole("heading").find(h => h.textContent === "What I'm Looking For")).toBeInTheDocument();
    expect(screen.getAllByRole("heading").find(h => h.textContent === "Let's Connect")).toBeInTheDocument();
    });
    it("renders all paragraph texts correctly", () => {
        render(<About />);
    
        //Testing other paragraph text, p tags
        expect(screen.getByText(/Associate Developer with/i)).toBeInTheDocument();
        expect(screen.getByText(/Over the past/i)).toBeInTheDocument();
        expect(screen.getByText(/actively searching for a/i)).toBeInTheDocument();
        expect(screen.getByText(/open to new opportunities/i)).toBeInTheDocument();

    });
    it("renders the bullet points under my experience properly", () => {
        render(<About/>);

        //testing lists
        expect(screen.getByText(/AWS Lambda/i)).toBeInTheDocument();
        expect(screen.getByText(/Next.js & Typescript/i)).toBeInTheDocument();
        expect(screen.getByText(/Java & Spring Boot/i)).toBeInTheDocument();
        expect(screen.getByText(/Multiple teams/i)).toBeInTheDocument();

    });
});
