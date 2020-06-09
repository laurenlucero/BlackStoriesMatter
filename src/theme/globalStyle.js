import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    height: 100%;
    width: 100%;
  }

  body {
    background-image: radial-gradient(#FFF3AC, #FFDE22);
    color: #1D1E22;
    font-family: 'Ubuntu', sans-serif;
  }

  h1 {
    margin: .25em;
  }

`;

export const theme = {
  black: "#1D1E22",
  white: "#FFFFFF",
  yellow: "#FFDE22",
};
