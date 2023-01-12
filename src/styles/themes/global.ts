import { createGlobalStyle } from "styled-components";

import { fonts } from "../../assets";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: none;
    font-weight: normal;
    outline: 0 !important;
  }

  a {
    -webkit-tap-highlight-color: transparent;
}

  
  

  @font-face {
    font-family: 'Findream';
    src: url(${fonts.Findream}) format('truetype');
  }

  body {
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray100};
    background-color: ${({ theme }) => theme.colors.gray50};
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 40px;
  }
`;
