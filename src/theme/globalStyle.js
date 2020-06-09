import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    background: #FFFDEA;
    color: #0B0C20;
    font-family: 'Ubuntu', sans-serif;
  }

  h1 {
    margin: .25em;
  }

`;

export const theme = {
  blue: "#5562FF",
  error: "#FF5562",
  light: "#FFFDEA",
  text: "#0B0C20",
  yellow: "#fff255",
};
