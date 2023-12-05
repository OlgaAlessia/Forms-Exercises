import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new box", function () {
  const { queryByText, getByLabelText } = render(<BoxList />);
  const input = getByLabelText("Color:");
  const btn = queryByText("Add a new box!");
  //expect(queryByText('Walk the dog')).not.toBeInTheDocument();
  //expect(queryByText('Walk the dog')).not.toBeInTheDocument();
  //fireEvent.change(input, { target: { value: 'Walk the dog' } });
  //fireEvent.click(btn);
  //expect(queryByText('Walk the dog')).toBeInTheDocument();
})


