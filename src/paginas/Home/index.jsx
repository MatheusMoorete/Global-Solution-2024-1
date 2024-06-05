import React, { useState } from "react";
import styled from "styled-components";
import StyledArrowDown from "../../components/StyledArrow/StyledArrowDown";
import TrasitionPages from "../../components/Transition/TrasitionPages";
import MyFooter from "../../components/Footer/MyFooter";
import ButttonScrollToTop from "../../components/ButttonScrollToTop/ButttonScrollToTop";
import Boias from "../../components/Boias/Boias";

const Container = styled.div`
  position: relative;
`;

const BlocoBranco = styled.div`
  height: 200px;
  background: linear-gradient(to bottom, rgb(186, 210, 235), rgb(255, 255, 255));
`;

const FooterContainer = styled.footer`
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  flex-direction: column;
`;

const VideoSection = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top, rgb(186, 210, 235), rgb(255, 255, 255));
  padding: 20px;
`;

const Home = () => {
  const [isArrowFixed, setIsArrowFixed] = useState(false);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("videoSection");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsArrowFixed(scrollPosition > 0);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollThreshold = 670;

  return (
    <TrasitionPages>
      <Container>
        <ButttonScrollToTop scrollThreshold={scrollThreshold} />
        <Boias />
      </Container>
      <BlocoBranco>
        <StyledArrowDown onClick={handleScrollToAbout} fixed={isArrowFixed} />
      </BlocoBranco>
      <VideoSection id="videoSection">
        <iframe
          width="1100"
          height="550"
          src="https://www.youtube.com/embed/zyi6AvbFftk?si=v2leLKcgcGa5TYlO"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </VideoSection>
      <FooterContainer>
        <MyFooter />
      </FooterContainer>
    </TrasitionPages>
  );
};

export default Home;
