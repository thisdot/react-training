import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import { TodoAsync, api } from "./TodoAsync";

// It's also possible to mock entire module using jest.mock('./api);
const mockCreateItem = (api.createItem = jest.fn());

test("users can add items to their list", async () => {
  const todoText = "Learn React";
  mockCreateItem.mockResolvedValueOnce({ id: 123, text: todoText });

  const { getByText, getByLabelText } = render(<TodoAsync />);

  const input = getByLabelText("What needs to be done?");
  const button = getByText("Add todo #1");

  fireEvent.change(input, { target: { value: todoText } });
  fireEvent.click(button);

  await waitFor(() => getByText(todoText));

  expect(mockCreateItem).toBeCalledTimes(1);
  expect(mockCreateItem).toBeCalledWith(
    "/items",
    expect.objectContaining({ text: todoText })
  );
  expect(mockCreateItem).toEqual({ id: 123, text: todoText });
});
