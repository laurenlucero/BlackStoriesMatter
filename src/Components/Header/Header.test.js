import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Header from "./Header";
import React from "react";

describe("Header", () => {
  afterEach(cleanup);
  it("should render Header", () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(getByText("Black Stories Matter")).toBeInTheDocument();
  });

  it("should render user welcome when logged in", () => {
    const { getByText } = render(
      <Router>
        <Header user={{ username: "lauren_reads", purpose: "Windows" }} />
      </Router>
    );
    expect(
      getByText(
        "Welcome, lauren_reads. We hope you find Windows in our stories!"
      )
    ).toBeInTheDocument();
  });

  it("should call the resetUser method on Logout button click", () => {
    const mockResetUser = jest.fn();
    const { getByText } = render(
      <Router>
        <Header
          user={{ username: "lauren_reads", purpose: "Windows" }}
          resetUser={mockResetUser}
        />
      </Router>
    );
    fireEvent.click(getByText("Logout"));
    expect(mockResetUser).toHaveBeenCalled();
  });
});
