import React, { Component } from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import { GlobalStyle } from "../../theme/globalStyle";
import { fetchIsbns } from "../../apiCalls";

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
        // ["Harrison", "Vashti"],
        // ["Hughes", "Langston"],
        ["Johnson", "Angela"],
        ["Mckissack", "Patricia"],
        // ["Ringgold", "Faith"],
        // ["Tate", "Eleonora"],
        ["Woodson", "Jacqueline"],
        // ["Zunan", "Elizabeth"],
      ],
    };
  }

  componentDidMount = () => {
    this.state.authors.forEach( (a) => {
    fetchIsbns(a[0], a[1]);
    })
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
