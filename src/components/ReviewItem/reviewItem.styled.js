import { Chip } from 'components/MovieItem/movieItem.styled';
import styled from 'styled-components';

export const ReviewItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  overflow: hidden;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 10px;
  background-color: rgba(220, 214, 247, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  @media screen and (min-width: 600px) {
    justify-content: flex-start;
    flex-direction: row;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  gap: 10px;
  @media screen and (max-width: 225px) {
    flex-direction: column;
  }
  @media screen and (min-width: 600px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  overflow: hidden;
  border: 2px solid #6643b5;
  background-color: #6643b5;
  @media screen and (min-width: 300px) {
    width: 100px;
    height: 100px;
  }
`;

export const AuthorAvatar = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center center;
`;

export const AuthorName = styled.h2`
  font-size: 18px;
  display: inline-block;
  margin-bottom: 15px;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

export const AuthorReview = styled.p`
  color: white;
  font-size: 15px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  line-height: 1.4;
`;

export const StyledChip = styled(Chip)`
  position: static;
  text-align: center;
  color: black;
  margin-bottom: 5px;
`;
export const StyledDate = styled.p`
  color: white;
  display: inline;
`;
