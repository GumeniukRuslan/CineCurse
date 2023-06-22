import { GiCrownedSkull } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  background: linear-gradient(
    183deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(102, 67, 181, 1) 85%
  );
  padding: 8px 0px;
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
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (min-width: 380px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const StyledSVG = styled(GiCrownedSkull)`
  fill: black;
  width: 30px;
  height: 30px;
  @media screen and (min-width: 380px) {
    width: 50px;
    height: 50px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 15px;
`;

export const StyledLink = styled(NavLink)`
  transition: color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  &.active {
    color: white;
  }

  &:hover,
  &:focus {
    color: #dcb5ff;
  }

  @media screen and (min-width: 380px) {
    font-size: 25px;
  }
`;

export const LogoText = styled.p`
  font-size: 15px;
  color: black;
  font-weight: bold;
`;
