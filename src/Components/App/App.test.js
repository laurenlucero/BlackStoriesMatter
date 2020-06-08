import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { MemoryRouter as Router } from "react-router-dom";

test("renders App", () => {
  const { getByText } = render(
    <Router>
      <App />
    </Router>
  );
  expect(getByText("Black Stories Matter")).toBeInTheDocument();
});
