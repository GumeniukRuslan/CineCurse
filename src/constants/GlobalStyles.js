import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  body{
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-image: url('https://img.freepik.com/premium-photo/cinema-movie-theatre-with-purple-seats-rows-black-copy-space-surface_118047-6621.jpg?w=1060');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
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
