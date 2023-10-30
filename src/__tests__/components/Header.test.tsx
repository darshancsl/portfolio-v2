import { render, screen } from "@testing-library/react";
import Header from "../../components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import pagesData from "../../pages/pagesData";

describe("header component", () => {
  it("navbar renders correctly", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const navbarElement = screen.getByRole("navigation");
    expect(navbarElement).toBeInTheDocument();
  });

  it("nav links renders correctly and navigates to expected urls", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const navLinks = screen.getAllByTestId("nav-list");
    navLinks.forEach((link, index) => {
      const { title, path } = pagesData[index];
      expect(link).toHaveTextContent(title);
      expect(link).toHaveAttribute("href", `/${path}`);
    });
  });
});
