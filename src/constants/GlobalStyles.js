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
  };

  p{
    color: white;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  };

  a {
    color: black;
    text-decoration: none;
    font-size: 25px;
    height: 100%;
    display: inline-block;
  };

  h2, h3, p {
    margin: 0;
  };

  h1{
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
      font-size: 22px;
      @media screen and (min-width: 380px) {
        font-size: 30px;
      }
  };

  body::-webkit-scrollbar{
    width: 10px;
  };

  body::-webkit-scrollbar-thumb{
    background-color: #502ee851;
    border-radius: 12px;;
  };
`;
