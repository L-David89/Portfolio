import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MainContainer = styled.main`
  display: flex;
  margin-top: 22vh;
  min-height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
      margin-top: 2vh;
    }

`;

export const Section = styled.section`
  width: 100%;
  h1 {
    margin-top: 10vh;
    margin-bottom: 10vh; 
    text-align: center;
    font-size: 3.8em;

    @media screen and (max-width: 768px) {
      font-size: 2em; 
      margin-top: 40vh;
    }
  }
`;

export const TextChunk = styled.span`
  opacity: 0;
  animation: ${slideIn} 1s ease forwards;
  animation-delay: ${props => props.delay}s;
  letter-spacing: 0.1em;
  display: block;
  font-weight: bold; 
  color: white; 
`;

export const SecondSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0; 
  height: 40vh;

  .top-section {
    margin-top: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;
    width: 100%;
  }
`;

export const CodeContainer = styled.div`
   width: 40%;
  @media screen and (max-width: 768px) {
    width: 80%; 
  }
`;

export const CodeLogo = styled.img`
  width: 12vw; 
  height: auto;
  margin-left: 34%;
  

  @media screen and (max-width: 768px) {
    width: 30vw;
    margin-left: 30%;
  }
`;

export const ImageContainer = styled.figure`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: auto; 
`;

export const ClickableImage = styled.img`
  cursor: pointer;
  width: 3.0rem;
  height: auto;
  margin: 1rem; 
  
  @media screen and (max-width: 768px) {
    margin-bottom: 0%;
    width: 1.9rem;
    
  }
`;

export const ImageCaption = styled.figcaption`
  text-align: center;
  font-size: 2rem; 
  color: white;
 
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0.5rem; 

  @media screen and (max-width: 768px) {
    font-size: 1.5rem; 
  }
`;