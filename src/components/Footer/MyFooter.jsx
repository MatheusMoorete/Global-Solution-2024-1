//Styled Components e Logica do Footer do site, deixei os Styled Components no mesmo arquivo pq são poucos

import styled from 'styled-components';

import Logo from "../../assets/OceanoVivo_Texto_Logo.png"


const FooterContainer = styled.footer`
  display: flex ;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  flex-direction: column;
`;

const ImagemLogo = styled.img`
  height: 2rem;
  margin-top: 8px;
  cursor: pointer;
`
const TextoFooter = styled.p`
  color: #F3F3F3;
  font-size: 10px;
`

const MyFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    
    <FooterContainer>
      <ImagemLogo src={Logo} alt="" onClick={scrollToTop}/>
      <TextoFooter>Copyright &copy; 2024 Oceno Vivo, Inc.</TextoFooter>
    </FooterContainer>
  );
};

export default MyFooter;
