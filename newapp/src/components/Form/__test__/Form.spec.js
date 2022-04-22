import { render, fireEvent, screen } from "@testing-library/react";
import { Form } from "../Form";

describe("Form", () => {
  it("calls onSubmit when btn clicked", () => {
    const mockSubmit = jest.fn();
    render(<Form onSubmit={mockSubmit} />);

    const button = screen.getByRole("button");
    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith("");
  });
});
