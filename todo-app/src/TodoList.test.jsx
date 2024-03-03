import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function () {
    render(<TodoList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new todo", async function () {
    const { queryByText, getByLabelText } = render(<TodoList />);
    const input = getByLabelText("New Todo:");
    const btn = queryByText("Add");
    expect(queryByText('wash dishes')).toBeNull();
    fireEvent.change(input, { target: { value: 'wash dishes' } });
    fireEvent.click(btn);
    await waitFor(() => expect(queryByText('Todo: wash dishes')).toBeTruthy());
})


