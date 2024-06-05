import Container from "react-bootstrap/Container";
import styled from 'styled-components';
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/OceanoVivo_Logo (2).png"
import { NavLink } from "react-router-dom";
import { StyledNavbar, AnimatedNavLink } from "./HeaderStyles";

const ImagemLogo = styled.img`
  height: 3rem;
  margin-top: 8px;
  cursor: pointer;
`

const Header = () => {
 return (
   <StyledNavbar variant="dark">
     <Container>
     <AnimatedNavLink className="Home" as={NavLink} to="/">
        <ImagemLogo src={Logo} />
      </AnimatedNavLink>
   
      

       <Nav className="ms-auto">
         <AnimatedNavLink as={NavLink} to="/Projeto">
           Conheça o projeto
         </AnimatedNavLink>
       </Nav>
     </Container>
   </StyledNavbar>
 );
};

export default Header;
