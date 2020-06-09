import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import BookPreview from "./BookPreview";
import React from "react";

describe("BookPreview", () => {
  afterEach(cleanup);

  it("should render BookPreview", () => {
    const { getByText } = render(
      <Router>
        <BookPreview
          book={{
            authorName: "Jacqueline Woodson",
            title: "AFTER TUPAC & D FOSTER",
          }}
        />
      </Router>
    );
    expect(getByText("Jacqueline Woodson")).toBeInTheDocument();
  });
});
