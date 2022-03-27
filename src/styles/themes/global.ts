import { createGlobalStyle } from "styled-components";

import { fonts } from "../../assets";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: none;
  }

  @font-face {
    font-family: 'Findream';
    src: url(${fonts.Findream}) format('tts');
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.gray100};
    background-color: ${({ theme }) => theme.colors.primary100};
  }
`;
