import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  };

  html, body {
    background-color: #1C1D1F;
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    height: 100%;
    overflow: hidden;
  };

  a {
    color: inherit;
    text-decoration: none;
  };

  button {
    border: none;
    cursor: pointer;
  };

  input {
    border: none;
  };
  
  li {
    list-style-type: none;
  };
`;
