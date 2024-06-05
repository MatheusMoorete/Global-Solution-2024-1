import Container from "react-bootstrap/Container";
import styled from 'styled-components';
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/OceanoVivo_Logo (2).png"
import { NavLink } from "react-router-dom";
import { StyledNavbar, AnimatedNavLink, LogoLink } from "./HeaderStyles";

const ImagemLogo = styled.img`
  height: 2.8rem;
  margin-top: 1px;
  cursor: pointer;
  display: flex;
`

const Header = () => {
 return (
   <StyledNavbar>
     <Container>
       <LogoLink className="Home" as={NavLink} to="/">
         <ImagemLogo src={Logo} />
       </LogoLink>
       <Nav>
         <AnimatedNavLink as={NavLink} to="/Projeto">
           Conheça o projeto
         </AnimatedNavLink>
       </Nav>
     </Container>
   </StyledNavbar>
 );
};

export default Header;
