import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Header from '../../Components/Header/Header';
import Mac from '../../assets/mac.png'
import Selfcare from '../../assets/Selfcare.png'
import Prime from '../../assets/Prime.png'
import Relogio from '../../assets/Relogio.png'
import { Main, Section, Slide, SlideContent, SlideImage } from '../Projetos/projeto_style'

function PortfolioCarousel() {
  const portfolios = [
    {
      id: 1,
      image: Mac,
      title: 'Mac',
      link: 'https://www.exemplo.com/portfolio1',
    },
    {
      id: 2,
      image: Selfcare,
      title: 'Portfólio 2',
      link: 'https://www.exemplo.com/portfolio2',
    },
    {
      id: 3,
      image: Prime,
      title: 'Portfólio 3',
      link: 'https://www.exemplo.com/portfolio3',
    },
    
    {
      id: 4,
      image: Relogio,
      title: 'Portfólio 4',
      link: 'https://www.exemplo.com/portfolio4',
    },
    {
      id: 5,
      image: 'url_da_imagem_5',
      title: 'Portfólio 5',
      link: 'https://www.exemplo.com/portfolio5',
    },
    
  ];

  return (
    <>
      <Header />
      <Main>
        <Section>
          <Swiper
            loop={true}
            autoplay={{ delay: 3000 }}
            slidesPerView={3}
            spaceBetween={10}
          >
            {portfolios.map(portfolio => (
              <SwiperSlide key={portfolio.id}>
                <Slide>
                  <SlideContent>
                    <SlideImage src={portfolio.image} alt={portfolio.title} />
                    <h3>{portfolio.title}</h3>
                    <a href={portfolio.link} target="_blank" rel="noopener noreferrer">Ver detalhes</a>
                  </SlideContent>
                </Slide>
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>
      </Main>
    </>
  );
}

export default PortfolioCarousel;
