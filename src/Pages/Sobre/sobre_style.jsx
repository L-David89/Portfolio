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
  padding: 20px;
`;

export const SobreContainer = styled.div`
  margin-top: 6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const TextContainer = styled.div`
  flex: 1;
  font-size: 1em;
  width: 100%;
  margin: 0 auto;
  color: white;
  text-align: center;
  height: 50vh;
  margin-bottom: 5vh;
  padding: 1vw;
  display: flex;
  flex-direction: column; 
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; 
  align-items: center; 
`;

export const StyledImage = styled.img`
  max-width: 80%; 
  height: auto;
  border-radius: 10px;
  background-color: blue;
  padding: 5px;
  animation: ${fadeInOut} 4s linear infinite;
`;

export const Frame = styled.div`
  position: relative;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  border: 2px solid white;
  border-radius: 12px;
  pointer-events: none;
  margin-top: 20px; 
`;