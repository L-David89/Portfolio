import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Header from "../../Components/Header/Header";
import Mac from "../../assets/mac.png";
import Selfcare from "../../assets/Selfcare.png";
import Prime from "../../assets/Prime.png";
import Relogio from "../../assets/Relogio.png";
import Beat from "../../assets/Beat.png";
import Loja from "../../assets/Loja.png";
import {
  Main,
  Section,
  Slide,
  SlideContent,
  SlideImage,
  DetailLink,
  InstructionText,
} from "../Projetos/projeto_style";

function PortfolioCarousel() {
  const portfolios = [
    {
      id: 1,
      image: Mac,
      title: "Mac",
      link: "https://github.com/L-David89/McDonalds",
    },
    {
      id: 2,
      image: Selfcare,
      title: "Selfcare",
      link: "https://github.com/L-David89/Selfcare",
    },
    {
      id: 3,
      image: Prime,
      title: "Prime ",
      link: "https://github.com/L-David89/Primevideo",
    },
    {
      id: 4,
      image: Relogio,
      title: "Relógio",
      link: "https://github.com/L-David89/Relogio-Mundial",
    },
    {
      id: 5,
      image: Beat,
      title: "Beat",
      link: "https://github.com/L-David89/Relogio-Mundial",
    },
    {
      id: 6,
      image: Loja,
      title: "Eletrônicos",
      link: "https://github.com/L-David89/Loja",
    },
  ];

  return (
    <>
      <Header />
      <Main>
        <Section>
          <Swiper
            autoplay={{ delay: 1000 }}
            slidesPerView={3}
            spaceBetween={10}
          >
            {portfolios.map((portfolio) => (
              <SwiperSlide key={portfolio.id}>
                <Slide>
                  <SlideContent>
                    <SlideImage src={portfolio.image} alt={portfolio.title} />
                    <h3>{portfolio.title}</h3>
                    <DetailLink
                      href={portfolio.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver detalhes
                    </DetailLink>
                  </SlideContent>
                </Slide>
              </SwiperSlide>
            ))}
          </Swiper>
          <InstructionText>Arraste para navegar pelos slides!</InstructionText>
        </Section>
      </Main>
    </>
  );
}

export default PortfolioCarousel;
