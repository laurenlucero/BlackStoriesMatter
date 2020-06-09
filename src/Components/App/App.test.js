import { MemoryRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
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
