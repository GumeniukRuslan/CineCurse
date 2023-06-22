import styled from 'styled-components';

export const StyledError = styled.p`
  color: white;
  font-size: 14px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  padding: 25px;
  margin: auto;
  display: block;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(220, 214, 247, 0.3);
  backdrop-filter: blur(10px);

  @media screen and (min-width: 600px) {
    font-size: 16px;
  }
  @media screen and (min-width: 910px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1250px) {
    font-size: 22px;
  }
`;
