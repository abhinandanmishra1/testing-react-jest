import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Box from "../components/Box/Box";

afterEach(cleanup);
const data = {
  imgUrl: "https://files.codingninjas.in/cc_march-1-03-17099.png",
  title: "Ninjas Career Camp Freshers Java July'22",
  description: "You can appear for the test from 30th May, from 12 AM onwards."
};
describe("Box component tests", () => {
  test("it should render box component", () => {
    const BoxComponent = render(<Box data={data} />);
    expect(BoxComponent).toBeTruthy();
  });
  test("box should contain an image,title and description", () => {
    const { queryByTestId } = render(<Box data={data} />);
    expect(queryByTestId("box-img")).toBeTruthy();
    expect(queryByTestId("box-title")).toBeTruthy();
    expect(queryByTestId("box-description")).toBeTruthy();
  });

  // Test some css also

  test("Box should have this css", () => {
    const { queryByTestId } = render(<Box data={data} />);
    expect(queryByTestId("box")).toHaveStyle(`
      margin: 4px;
      width: 300px;
      height: 300px;
      box-shadow: 2px 2px 4px 2px gray;
      transition: 0.3s;
`);
  });

  test("Box image should have this css", () => {
    const { queryByTestId } = render(<Box data={data} />);
    expect(queryByTestId("box-img")).toHaveStyle(`
    width: 100%;
    height: 150px;
`);
  });

  test("Box title should have this css", () => {
    const { queryByTestId } = render(<Box data={data} />);
    expect(queryByTestId("box-title")).toHaveStyle(`
    font-size: 1rem;
`);
  });

  test("Box description should have this css", () => {
    const { queryByTestId } = render(<Box data={data} />);
    expect(queryByTestId("box-description")).toHaveStyle(`
    font-size: 0.7rem;
`);
  });
});
