import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new Todo", function () {
  const { queryByText, getByLabelText } = render(<TodoList />);
  const input = getByLabelText("Task:");
  const btn = queryByText("Add a Todo!");
  expect(queryByText('Walk the dog')).not.toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'Walk the dog' } });
  fireEvent.click(btn);
  expect(queryByText('Walk the dog')).toBeInTheDocument();
})


