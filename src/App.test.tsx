import { render, screen } from "@testing-library/react";
import React from "react";
import {BaseApp} from "./App";

test("renders learn react link", () => {
  render(<BaseApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
