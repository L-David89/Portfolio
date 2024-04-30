import React from 'react'
import Header from '../../Components/Header/Header'
import { Main, SobreContainer, TextContainer, ImageContainer, StyledImage } from './sobre_style';
import luis from '../../assets/luis.png'

const Sobre = () => {
  return (
    <>
      <Header />
      <Main>
        <SobreContainer>
          <TextContainer>
            <h2>
              Desde os 7 anos, quando tive meu primeiro contato com um celular e videogames, desenvolvi um interesse pela tecnologia. Durante a adolescência, conheci a área da programação, dedicando-me a estudá-la quando podia. Paralelamente, meu interesse por videogames também me inspira e contribui para meu desenvolvimento criativo e analítico. Dedico horas vagas ao estudo contínuo, mantendo-me atualizado com as últimas tendências. Estou preparado para aplicar meu esforço e conhecimento em desafios profissionais, impulsionando a inovação e alcançando novos resultados.
            </h2>
          </TextContainer>
          <ImageContainer>
            <StyledImage src={luis} alt="perfil" />
          </ImageContainer>
        </SobreContainer>
      </Main>
    </>
  );
};

export default Sobre;
