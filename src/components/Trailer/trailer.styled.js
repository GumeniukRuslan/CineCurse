import styled from 'styled-components';

export const StyledTrailer = styled.iframe`
  width: 100%;
  border: none;
  @media screen and (min-width: 380px) {
    height: 250px;
  }
  @media screen and (min-width: 600px) {
    height: 400px;
  }

  @media screen and (min-width: 910px) {
    height: 450px;
  }
  @media screen and (min-width: 1150px) {
    height: 500px;
  }
  @media screen and (min-width: 1250px) {
    height: 600px;
  }
`;

export const TrailerWrapper = styled.div`
  padding: 30px;
  border-radius: 10px;
  background-color: rgba(220, 214, 247, 0.3);
  backdrop-filter: blur(10px);
`;
