import { within } from "@testing-library/dom";
import ReactDOM from "react-dom";
import { fireEvent, render } from "@testing-library/react";
import { Todo } from "./Todo";
import userEvent from "@testing-library/user-event";

// a basic test using query selectors
test("renders as expected", () => {
  const root = document.createElement("div");
  ReactDOM.render(<Todo />, root);

  expect(root.querySelector("h1")?.textContent).toBe("Todos");
  expect(root.querySelector("label")?.textContent).toBe(
    "What needs to be done?"
  );
  // this would fail
  // expect(root.querySelector("button")?.textContent).toBe("Add todo");
  expect(root.querySelector("button")?.textContent).toContain("Add todo");
});

// use dom-testing-library to query the DOM
// a very light-weight solution for testing DOM nodes
test("renders as expected with dom-testing-library", () => {
  const root = document.createElement("div");
  ReactDOM.render(<Todo />, root);

  const { getByText, getByLabelText } = within(root);

  // expect(getByText("Todos")).not.toBeNull();
  // expect(getByLabelText("What needs to be done?")).not.toBeNull();
  // expect(getByText("Add todo #1")).not.toBeNull();

  // the above code can be shortend to
  getByText("Todos");
  getByLabelText("What needs to be done?");
  getByText("Add todo #1");
});

// use react-testing-library
test("renders as expected with react-testing-library", () => {
  const { getByText, getByLabelText } = render(<Todo />);

  getByText("Todos");
  getByLabelText("What needs to be done?");
  getByText("Add todo #1");
});

// test item addition using fireEvent
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

// test item addition using userEvent
test("user-events allows users to add...", () => {
  const { getByText, getByLabelText } = render(<Todo />);

  const input = getByLabelText("What needs to be done?");
  const button = getByText("Add todo #1");

  userEvent.type(input, "Learn Angular");
  userEvent.click(button);

  getByText("Learn Angular");
  getByText("Add todo #2");
});
// More events are fired when you use userEvent.click 
// It's more realistic to what happens when a user clicks. 
// Ex: the mouseDown event listener won't be trigger when you use fireEvent.click 
// but it will trigger when you use userEvent.click
