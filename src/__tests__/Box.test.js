import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Box from "../components/Box/Box";

afterEach(cleanup);

describe("Box component tests", () => {
  test("it should render box component", () => {
    const data = {
      imgUrl: "https://files.codingninjas.in/cc_march-1-03-17099.png",
      title: "Ninjas Career Camp Freshers Java July'22",
      description:
        "You can appear for the test from 30th May, from 12 AM onwards."
    };
    const BoxComponent = render(<Box data={data} />);
    expect(BoxComponent).toBeTruthy();
  });
  test("box should contain an image,title and description", () => {
    const data = {
      imgUrl: "https://files.codingninjas.in/cc_march-1-03-17099.png",
      title: "Ninjas Career Camp Freshers Java July'22",
      description:
        "You can appear for the test from 30th May, from 12 AM onwards."
    };
    const { queryByTestId } = render(<Box data={data} />);
    expect(queryByTestId("box-img")).toBeTruthy();
    expect(queryByTestId("box-title")).toBeTruthy();
    expect(queryByTestId("box-description")).toBeTruthy();
  });
  // Test some css also
});
