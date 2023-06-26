import styled from 'styled-components';

export const GenresWrapper = styled.div`
  display: inline-block;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  @media screen and (min-width: 600px) {
    margin-bottom: 45px;
    font-size: 18px;
  }
`;
export const GenresStyledList = styled.ul`
  display: inline-flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-bottom: 15px;
  @media screen and (min-width: 600px) {
    margin-bottom: 45px;
  }
`;
