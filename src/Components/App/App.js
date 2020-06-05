import React, { Component } from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import { GlobalStyle } from "../../theme/globalStyle";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [
        "Andrea Davis Pinkney",
        "Christopher Myers",
        "Christopher Robinson",
        "Jabari Asim",
        "Jacqueline Woodson",
        "Kadir Nelson",
        "Nikki Grimes",
      ],
    };
  }

  render() {
    return (
      <Wrapper>
        <Header />
      </Wrapper>
    );
  }
}

export default App;
