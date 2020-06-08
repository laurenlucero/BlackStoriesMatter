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
    font-family: 'Ubuntu', sans-serif;;
  }

  h1 {
    margin: .25em;
  }

`;

export const theme = {
  background: "#fff255",
  text: "#0B0C20",
  complement: "#5562FF", 
  light: "#FFFDEA",
};
