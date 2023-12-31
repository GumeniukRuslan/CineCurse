import { Container, LogoText, NavList, StyledHeader, StyledLink, StyledSVG } from "./header.styled"


export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledLink to='/'>
          <StyledSVG />
          <LogoText>CineCurse</LogoText>
        </StyledLink>
        <NavList>
          <li>
            <StyledLink to='/'>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to='/movies'>
              Movies
            </StyledLink>
          </li>
        </NavList>
      </Container>
      
    </StyledHeader>
  )
}