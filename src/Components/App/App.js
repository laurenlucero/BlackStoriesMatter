import React, { Component } from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import { GlobalStyle } from "../../theme/globalStyle";
import { fetchIsbns, fetchTitles } from "../../apiCalls";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [
        ["Brown-Wood", "JaNay"],
        ["Copeland", "Misty"],
        ["Grimes", "Nikki"],
        ["Johnson", "Angela"],
        ["Mckissack", "Patricia"],
        ["Woodson", "Jacqueline"],
      ],
      allIsbns: [],
      bookInfo: [],
    };
  }

  componentDidMount = () => {
    this.state.authors.map(async (a) => {
      await fetchIsbns(a[0], a[1])
        .then((result) =>
          this.setState({ allIsbns: [...this.state.allIsbns, ...result] })
        )
        .then(() => this.getTitles())
        .catch((error) => console.log("error", error));
    });
  };

  getTitles = () => {
    this.state.allIsbns.map(async (isbn) => {
      await fetchTitles(isbn)
        .then((result) =>
          this.setState({ bookInfo: [...this.state.bookInfo, ...result] })
        )
        .then(() => this.filterFormats())
        .then(() => this.removeDuplicates());
    });
  };

  filterFormats = () => {
    let filteredFormats = this.state.bookInfo.filter(
      (book) => book.formatCode === "HC"
    );
    this.setState({ bookInfo: [...filteredFormats] });
  };

  removeDuplicates = () => {
    let uniqueTitles = Array.from(
      new Set(this.state.bookInfo.map((book) => book.title))
    ).map((title) => {
      return this.state.bookInfo.find((book) => book.title === title);
    });
    this.setState({ bookInfo: [...uniqueTitles] });
  };

  render() {
    return (
      <Wrapper>
        <Header />
      </Wrapper>
    );
  }
}

export default App;
