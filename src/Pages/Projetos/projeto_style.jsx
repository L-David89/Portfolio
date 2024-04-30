import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 768px) {
    padding: 5vw; 
    
  }
`;

export const Section = styled.section`
  width: 100%;
  @media screen and (max-width: 768px) {
   
    margin-top: 70%;
  }
`;

export const Slide = styled.div`
  width: 100%;
`;

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SlideImage = styled.img`
 
  width: 20vw; 
  height: auto;

  @media screen and (max-width: 768px) {
    max-width: 20vw; 
  }
`;
export const DetailLink = styled.a`
text-decoration: none;
color: black;
transition: color 0.3s ease;

&:hover {
  color: blue;
}
`;

export const InstructionText = styled.p`
  text-align: center;
  margin-top: 1.5vh;
  font-weight: bold;
  color: white;
  animation: ${fadeInOut} 3s linear infinite;
`;