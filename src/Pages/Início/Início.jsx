import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import { MainContainer, Section, SecondSection, ImageContainer, Card, CardImage, CardCaption, TextChunk } from './inicio_style';
import Html from '../../assets/Html.png';
import CSS from '../../assets/CSS.png';
import Javascript from '../../assets/Javascript.png';
import Reactlogo from '../../assets/React.png';
import Styled from '../../assets/Styled.png';

export default function InicioHTML() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <Header /> 
      <MainContainer>
        <Section>
          <h1>
            <TextChunk delay={0}>Olá,</TextChunk>
            <TextChunk delay={1}>Eu sou Luis David!</TextChunk>
            <TextChunk delay={2}>Tenho 23 anos</TextChunk>
            <TextChunk delay={3}>e sou desenvolvedor Front-End!</TextChunk>
          </h1>
        </Section>
        <SecondSection>
  <ImageContainer>
    <Card onMouseEnter={() => setHoveredCard("HTML")} onMouseLeave={() => setHoveredCard(null)}>
      <CardImage src={Html} alt=""/>
      {hoveredCard === "HTML" && <CardCaption>HTML</CardCaption>}
    </Card>
    <Card onMouseEnter={() => setHoveredCard("CSS")} onMouseLeave={() => setHoveredCard(null)}>
      <CardImage src={CSS} alt=""/>
      {hoveredCard === "CSS" && <CardCaption>CSS</CardCaption>}
    </Card>
    <Card onMouseEnter={() => setHoveredCard("Javascript")} onMouseLeave={() => setHoveredCard(null)}>
      <CardImage src={Javascript} alt=""/>
      {hoveredCard === "Javascript" && <CardCaption>Javascript</CardCaption>}
    </Card>
    <Card onMouseEnter={() => setHoveredCard("React")} onMouseLeave={() => setHoveredCard(null)}>
      <CardImage src={Reactlogo} alt=""/>
      {hoveredCard === "React" && <CardCaption>React</CardCaption>}
    </Card>
    <Card onMouseEnter={() => setHoveredCard("Styled")} onMouseLeave={() => setHoveredCard(null)}>
      <CardImage src={Styled} alt=""/>
      {hoveredCard === "Styled" && <CardCaption>Styled</CardCaption>}
    </Card>
  </ImageContainer>
</SecondSection>
      </MainContainer>
    </>
  );
}