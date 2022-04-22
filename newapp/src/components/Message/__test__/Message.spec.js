import { render, screen } from "@testing-library/react";
import { Message } from "../Message";

describe("Message", () => {
  it("renders passed text", () => {
    // const component = render(<Message text="Text" author="author" theme="dark" />);

    render(<Message text="Text" author="author" theme="dark" />);

    const text = screen.getByText("Text");
    // const text = component.getByText("Text");

    expect(text).toBeDefined();
  });

  it("matches snapshot", () => {
    const component = render(
      <Message text="Text" author="author" theme="dark" />
    );

    expect(component).toMatchSnapshot();
  });
});
