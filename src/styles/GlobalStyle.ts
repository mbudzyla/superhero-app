import { createGlobalStyle } from 'styled-components';

import type { Theme } from './types';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    box-sizing: border-box;
  }
  
  :root, button {
    font-family: 'Arial', Helvetica, sans-serif;
    font: 14px/18px ${({ theme }) => theme.font};
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
  }
  
  a {
    background-color: transparent;
    text-decoration: none;
    color: black;
    text-align: center;
  }
`;

export default GlobalStyle;
