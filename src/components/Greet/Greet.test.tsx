// import test from "node:test";

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet file run successfully", () => {
  render(<Greet number={12} />);
  const textElement = screen.getByText(/greet/i);
  expect(textElement).toBeInTheDocument();
});
