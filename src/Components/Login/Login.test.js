import React from "react";
import Login from "./Login";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter as Router } from "react-router-dom";

describe("Login", () => {
  afterEach(cleanup);

  it("should render welcome message and login form", () => {
    const { getByText, getByLabelText } = render(
      <Router>
        <Login />
      </Router>
    );
    expect(getByText("Welcome to Black Stories Matter!")).toBeInTheDocument();
    expect(getByLabelText("Enter your username:")).toBeInTheDocument();
  });

  it("should render error message if missing form input", () => {
    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <Router>
        <Login />
      </Router>
    );
    fireEvent.change(getByPlaceholderText("username"), {
      target: { value: "" },
    });
    fireEvent.change(getByPlaceholderText("password"), {
      target: { value: "" },
    });
    fireEvent.change(
      getByLabelText("Are you looking for mirrors or windows?"),
      { target: { value: "- Please share why you are here -" } }
    );
    fireEvent.click(getByText("Login"));
    expect(getByText("Please complete all inputs.")).toBeInTheDocument();
  });

  it("should run setUser if all inputs are complete", () => {
    const mockSetUser = jest.fn();
    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <Router>
        <Login setUser={mockSetUser} />
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
      { target: { value: "Both" } }
    );
    fireEvent.click(getByText("Login"));
    expect(mockSetUser).toHaveBeenCalledTimes(1);
  });
});
