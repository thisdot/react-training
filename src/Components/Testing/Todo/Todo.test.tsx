import { fireEvent, render } from "@testing-library/react";
import { Todo } from "./Todo";

test("renders as expected", () => {
  const { getByText, getByLabelText } = render(<Todo />);

  getByLabelText("What needs to be done?");
  getByText("Add todo #1");
});

test("allows users to add items to their list", () => {
  const { getByText, getByLabelText } = render(<Todo />);

  const input = getByLabelText("What needs to be done?");
  const button = getByText("Add todo #1");

  // Simulate add events
  fireEvent.change(input, { target: { value: "Learn React" } });
  fireEvent.click(button);

  // Make assertion
  getByText("Learn React");
  getByText("Add todo #2");
});
// More events are fired when you use userEvent.click 
// It's more realistic to what happens when a user clicks. 
// Ex: the mouseDown event listener won't be trigger when you use fireEvent.click 
// but it will trigger when you use userEvent.click
