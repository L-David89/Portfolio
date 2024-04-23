import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const MainContainer = styled.main`
  display: flex;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Section = styled.section`
  font-size: 2em; 
  color: white;
  text-align: center;
  margin-top: 8vh;
  margin-bottom: 16vh;
  padding: 5vh 1vw; 
`;

export const SecondSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh; 
  width: 100%; 
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%; 
  max-width: 100%;
`;

export const Card = styled.div`
  text-align: center;
  width: 15vw;
  height: 20vh;
  margin: 0 1vw; 

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled.img`
  width: auto;
  height: 50%;
  max-width: 100%;
`;

export const CardCaption = styled.p`
  font-weight: bold; 
  color: white; 
  margin-top: 0.5rem; 
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