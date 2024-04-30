import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import { MainContainer, Section, TextChunk, SecondSection, CodeContainer, CodeLogo, ImageContainer, ImageCaption, ClickableImage  } from './inicio_style';
import Html from '../../assets/Html.png';
import CSS from '../../assets/CSS.png';
import Javascript from '../../assets/Javascript.png';
import Reactlogo from '../../assets/React.png';
import Styled from '../../assets/Styled.png';
import { parse } from 'date-fns';

export default function InicioHTML() {
  const [Image, setImage] = useState(Html);
  const [age, setAge] = useState(23);

  const getImageCaption = () => {
    switch (Image) {
      case Html:
        return 'HTML';
      case CSS:
        return 'CSS';
      case Javascript:
        return 'JavaScript';
      case Reactlogo:
        return 'React';
      case Styled:
        return 'Styled';
      default:
        return '';
    }
  };

  useEffect(() => {
    const today = new Date();
    const birthday = parse('2000-09-08', 'yyyy-MM-dd', new Date());
    const calculatedAge = today.getFullYear() - birthday.getFullYear();
    const hasBirthdayPassedThisYear =
      today.getMonth() > birthday.getMonth() ||
      (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());

    setAge(hasBirthdayPassedThisYear ? calculatedAge : calculatedAge - 1);
  }, []);

  return (
    <>
      <Header />
      <MainContainer>
        <Section>
          <h1>
            <TextChunk delay={0}>Olá,</TextChunk>
            <TextChunk delay={1}>Eu sou Luis David!</TextChunk>
            <TextChunk delay={2}>Tenho {age} anos</TextChunk>
            <TextChunk delay={3}>e sou desenvolvedor Front-End!</TextChunk>
          </h1>
        </Section>
        <SecondSection>
          <div className="top-section">
            <CodeContainer>
              <figure>
                <CodeLogo src={Image} alt="Code Logo" />
                <ImageCaption centered="true">{getImageCaption()}</ImageCaption>
              </figure>
            </CodeContainer>
          </div>
          <ImageContainer>
            <ClickableImage
              src={Html}
              alt="HTML"
              onClick={() => setImage(Html)}
            />
            <ClickableImage
              src={CSS}
              alt="CSS"
              onClick={() => setImage(CSS)}
            />
            <ClickableImage
              src={Javascript}
              alt="JavaScript"
              onClick={() => setImage(Javascript)}
            />
            <ClickableImage
              src={Reactlogo}
              alt="React"
              onClick={() => setImage(Reactlogo)}
            />
            <ClickableImage
              src={Styled}
              alt="Styled"
              onClick={() => setImage(Styled)}
            />
          </ImageContainer>
        </SecondSection>
      </MainContainer>
    </>
  );
}