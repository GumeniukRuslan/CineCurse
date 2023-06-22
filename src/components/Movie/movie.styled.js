import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackLinkBtn = styled(Link)`
  margin: 25px 0;
  background-color: #6643b5;
  border: none;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.908);
  cursor: pointer;
  font-size: 16px;
  padding: 5px 20px;
  transition: background-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;

  &:hover,
  &:focus {
    background-color: #8594e4;
  }
`;

export const FlexContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(220, 214, 247, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const MoviePoster = styled.img`
  max-width: 70%;
  margin-bottom: 10px;
  @media screen and (min-width: 600px) {
    max-width: 260px;
    margin-bottom: 5px;
  }
`;

export const StyledTitle = styled.h1`
  margin: 0;
  font-size: 25px;
  width: 90%;
  margin-bottom: 20px;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  @media screen and (min-width: 600px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  color: white;
  padding-bottom: 15px;

  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  @media screen and (min-width: 600px) {
    font-size: 18px;
  }
`;

export const AditionalInfo = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 10px;

  @media screen and (min-width: 600px) {
    position: absolute;
    bottom: 15px;
  }
`;

export const AditionalInfoLink = styled.li`
  border: none;
  border-radius: 4px;
  background-color: #6643b5;
  cursor: pointer;
  padding: 4px 10px;
  transition: background-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;

  &:hover,
  &:focus {
    background-color: #8594e4;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 18px;
  &.active {
    text-decoration: underline;
  }
`;

export const ReleaseDate = styled.div`
  color: white;
  margin-bottom: 5px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;
