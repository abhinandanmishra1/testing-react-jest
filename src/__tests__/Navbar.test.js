import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../components/Navbar/Navbar";
afterEach(cleanup);
describe("Home Component Tests", () => {
  test("renders the Navbar Component", () => {
    const { container } = render(<Navbar />);
    expect(container).toBeTruthy();
  });

  test("Navbar contains a logo Image", () => {
    const { getByTestId } = render(<Navbar />);
    const navDiv = getByTestId("navbar");
    expect(navDiv).toBeTruthy();
    expect(navDiv.childElementCount).toBe(2);
  });

  test("Navbar should have display of flex", () => {
    const { getByTestId } = render(<Navbar />);
    const navDiv = getByTestId("navbar");
    expect(navDiv).toHaveStyle("display:flex");
  });
});
