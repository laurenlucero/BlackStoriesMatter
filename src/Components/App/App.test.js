import "@testing-library/jest-dom/extend-expect";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import * as React from "react";
import App from "./App";
import selectEvent from "react-select-event";

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
    const logoutBtn = await waitFor(() => getByText("Logout"));
    expect(logoutBtn).toBeInTheDocument();
  });

  it.skip("should render book previews for selected option", async () => {
    const {
      getByText,
      getByLabelText,
      getByPlaceholderText,
      getByTestId,
    } = render(
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
    const filter = await waitFor(() => getByLabelText("Filter books:"));
    expect(filter).toBeInTheDocument();
    await selectEvent.select(getByLabelText("Filter books:"), [
      "Angela Johnson",
    ]);
    const bookPreview = await waitFor(() => getByText("VIOLET'S MUSIC"));
    expect(bookPreview).toBeInTheDocument();
  });
});
