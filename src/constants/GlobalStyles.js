import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  body{
    background: #f7f3ff;
  }



  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: black;
    text-decoration: none;
    font-size: 25px;
    height: 100%;
    display: inline-block;
  }

  h2, h3, p {
    margin: 0;
  }
`;
