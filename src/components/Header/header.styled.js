import { GiFilmSpool } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  background-color: #6643b5;
  padding: 20px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0 auto;
  max-width: 1250px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const StyledSVG = styled(GiFilmSpool)`
  margin-right: 10px;
  fill: currentColor;
  fill: black;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 15px;
`;

export const StyledLink = styled(NavLink)`
  transition: color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  &.active {
    color: white;
  }

  &:hover,
  &:focus {
    color: #dcb5ff;
  }
`;
