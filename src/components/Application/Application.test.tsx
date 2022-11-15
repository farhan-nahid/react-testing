import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("Render Correctly", () => {
    render(<Application />);
    const textElement = screen.getByRole("textbox");
    expect(textElement).toBeInTheDocument();

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const checkElement = screen.getByRole("checkbox");
    expect(checkElement).toBeInTheDocument();

    const btnElement = screen.getByRole("button");
    expect(btnElement).toBeInTheDocument();
  });
});
