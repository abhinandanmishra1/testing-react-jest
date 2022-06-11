import { render, within, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../components/Home/Home";
afterEach(cleanup);
describe("Home Component Tests", () => {
  test("renders the Home Component", () => {
    const { container } = render(<Home />);
    expect(container).toBeTruthy();
  });

  test("Home component should have a navbar", () => {
    const { getByTestId } = render(<Home />);
    const HomeComponent = getByTestId("home-div");
    const Navbar = within(HomeComponent).getByTestId("navbar");
    expect(Navbar).toBeTruthy();
  });

  test("Home Component contains three Box Components", () => {
    const { getByTestId } = render(<Home />);
    const HomeComponent = getByTestId("home-div");
    const boxes = within(HomeComponent).getByTestId("boxes");
    expect(boxes.childElementCount).toBe(3);
  });
});
