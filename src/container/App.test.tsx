import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Header and footer rendering", () => {
  it("renders header component", () => {
    render(<App />);
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });

  it("renders footer component", () => {
    render(<App />);
    const footerElement = screen.getByText(/Footer/i);
    expect(footerElement).toBeInTheDocument();
  });
});
