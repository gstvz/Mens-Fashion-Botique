import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  };

  html, body {
    background-color: #1C1D1F;
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    min-height: 100vh;
  };

  a {
    color: inherit;
    text-decoration: none;
  };

  button {
    cursor: pointer;
  };
  
  li {
    list-style-type: none;
  };
`;
