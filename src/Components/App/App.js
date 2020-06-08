import React, { Component } from "react";
import Header from "../Header/Header";
import Login from "../Login/Login";
import BookContainer from "../BookContainer/BookContainer";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../theme/globalStyle";
import { fetchIsbns, fetchTitles } from "../../apiCalls";
import { Route } from "react-router-dom";

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
      user: "",
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
        .then(() => this.removeDuplicates())
        .then(() => this.sortAlphabetically());
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

  sortAlphabetically = () => {
    let alphabetical = this.state.bookInfo.sort((a, b) =>
      a.title > b.title ? 1 : -1
    );
    this.setState({ bookInfo: [...alphabetical] });
  };

  setUser = (user) => {
    this.setState({ user: user });
  };

  resetUser = () => {
    this.setState({ user: "" });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header user={this.state.user} resetUser={this.resetUser} />
          <Route
            exact
            path="/"
            render={() => {
              return <Login setUser={this.setUser} />;
            }}
          />
          <Route
            exact
            path="/Books"
            render={() => {
              return <BookContainer bookInfo={this.state.bookInfo} />;
            }}
          />
        </Wrapper>
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}

export default App;
