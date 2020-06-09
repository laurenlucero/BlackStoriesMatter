import { MemoryRouter as Router } from "react-router-dom";
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/";
import App from "./App";
import React from "react";

test("renders App", () => {
  const { getByText } = render(
    <Router>
      <App />
    </Router>
  );
  expect(getByText("Black Stories Matter")).toBeInTheDocument();
});

describe("App", () => {
  afterEach(cleanup);

  it("should render Header", () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );
    expect(getByText("Black Stories Matter")).toBeInTheDocument();
  });

  it("should render Login", () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );
    expect(getByText("Login")).toBeInTheDocument();
  });

  it("should render BooksContainer on successful login", async () => {
    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <Router>
        <App />
      </Router>
    );
    fireEvent.change(getByPlaceholderText("username"), {
      target: { value: "lauren_reads" },
    });
    fireEvent.change(getByPlaceholderText("password"), {
      target: { value: "abc123" },
    });
    fireEvent.change(
      getByLabelText("Are you looking for mirrors or windows?"),
      { target: { value: "windows" } }
    );
    fireEvent.click(getByText("Login"));
    const userWelcome = await waitFor(() =>
      getByText("Welcome, lauren_reads.")
    );
    expect(userWelcome).toBeInTheDocument();
  });
});
