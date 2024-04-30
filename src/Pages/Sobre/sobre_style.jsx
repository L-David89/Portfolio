import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Main = styled.main`
  padding: 5vw;
`;

export const SobreContainer = styled.div`
  margin-top: 6vh; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5vw; 

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  font-size: 2vw; 
  width: 70%; 
  margin: 0 auto;
  color: white;
  text-align: center;
  margin-bottom: 5vh;
  padding: 2vw; 
  display: flex;
  flex-direction: column;
  max-height: 40vh; 
  overflow-y: auto; 

  @media screen and (max-width: 768px) {
    margin-top: 20vh;
    border: 2px solid white;
    border-radius: 2vw; 
    padding: 4vw; 
    font-size: 0.7rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh; 

  @media screen and (max-width: 768px) {
    margin-bottom: 10vh; 
  }
`;

export const StyledImage = styled.img`
  max-width: 80%;
  height: auto;
  border-radius: 2vw; 
  background-color: blue;
  padding: 1vw; 
  animation: ${fadeInOut} 4s linear infinite;
`;

export const Frame = styled.div`
  position: relative;
  width: 100%; 
  height: calc(100% + 10vh); 
  border: 2px solid white;
  border-radius: 2vw; 
  pointer-events: none;
  margin-top: 5vh; 
`;