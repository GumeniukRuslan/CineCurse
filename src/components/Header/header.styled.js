import { GiCrownedSkull } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  background: linear-gradient(
    315deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(102, 67, 181, 1) 70%
  );
  padding: 8px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  @media screen and (min-width: 480px) {
    background: linear-gradient(
      345deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(102, 67, 181, 1) 90%
    );
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  max-width: 1250px;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (min-width: 380px) {
    padding-left: 15px;
    padding-right: 15px;
    gap: 15px;
  }
`;

export const StyledSVG = styled(GiCrownedSkull)`
  fill: black;
  width: 30px;
  height: 30px;
  transition: fill 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;

  @media screen and (min-width: 380px) {
    width: 50px;
    height: 50px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 8px;
  @media screen and (min-width: 380px) {
    gap: 15px;
  }
`;

export const StyledLink = styled(NavLink)`
  transition: color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  display: flex;
  font-size: 15px;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  &.active {
    color: white;
  }
  &:hover,
  &:focus,
  &:hover svg,
  &:hover p,
  &:focus svg,
  &:focus p {
    fill: #dcb5ff;
    color: #dcb5ff;
  }

  @media screen and (min-width: 380px) {
    font-size: 23px;
  }
`;

export const LogoText = styled.p`
  font-size: 10px;
  color: black;
  font-family: 'Cinzel', serif;
  transition: color 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  @media screen and (min-width: 380px) {
    font-size: 15px;
  }
`;
