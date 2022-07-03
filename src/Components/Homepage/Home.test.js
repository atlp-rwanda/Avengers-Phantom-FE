import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

// describe("App Component", function () {
//     it("should return Webpack phantom landing page", function () {
//       let { getByText } = render(<Home/>);
//       expect(getByText("Webpack phantom landing page")).toMatchInlineSnapshot(`
//       <h1>
//         Webpack phantom landing page
//       </h1>
//       `);
//     });
//   });

test("should return Webpack phantom landing page", () => {
  render(<Home />);
  const homeElement = screen.getByLabelText(/We got you covered?/i);
  expect(homeElement).toBeInTheDocument();
});
