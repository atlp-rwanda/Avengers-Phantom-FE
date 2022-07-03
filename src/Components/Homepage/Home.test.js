import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("should return Webpack phantom landing page", () => {
  render(<Home />);
  const homeElement = screen.getByLabelText(/We got you covered?/i);
  expect(homeElement).toBeInTheDocument();
});
