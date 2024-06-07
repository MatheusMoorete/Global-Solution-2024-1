import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import StyledArrowDown from "../../components/StyledArrow/StyledArrowDown";
import TrasitionPages from "../../components/Transition/TrasitionPages";
import MyFooter from "../../components/Footer/MyFooter";
import ButttonScrollToTop from "../../components/ButttonScrollToTop/ButttonScrollToTop";
import Boias from "../../components/Boias/Boias";
import thumbnailImage from "../../assets/OceanoVivo_Logo.png"; 

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
  position: relative;
`;

const Thumbnail = styled.img`
  max-width: 80%;
  max-height: 80%;
  cursor: pointer;
  object-fit: contain;
`;

const PlayButtonContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1100px;
  height: 550px;
`;

const PlayButton = styled(FaPlay)`
  color: white;
  font-size: 4rem;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
  }
`;

const Home = () => {
  const [isArrowFixed, setIsArrowFixed] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("videoSection");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsArrowFixed(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleThumbnailClick = () => {
    setShowVideo(true);
  };

  const scrollThreshold = 670;
  const videoId = "P2Nd7sdIaB0";

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
        {showVideo ? (
          <iframe
            width="1100"
            height="550"
            src={`https://www.youtube.com/embed/${videoId}?si=WuxdosaGqaxvrFj6`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <Thumbnail src={thumbnailImage} alt="Video Thumbnail" onClick={handleThumbnailClick} />
            <PlayButtonContainer onClick={handleThumbnailClick}>
              <PlayButton />
            </PlayButtonContainer>
          </>
        )}
      </VideoSection>
      <FooterContainer>
        <MyFooter />
      </FooterContainer>
    </TrasitionPages>
  );
};

export default Home;
