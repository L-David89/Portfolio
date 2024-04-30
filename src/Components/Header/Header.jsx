import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../assets/logo1.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import { HeaderContainer, Logo, Navigation, ExternalLinks } from './header_style';

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <Logo src={logo1} alt="Logo" />
      {(isMobile || !isMobile) && ( 
        <Navigation isMobile={isMobile}>
          <ul>
            <li>
              <NavLink to="/" className="nav-link">Início</NavLink>
            </li>
            <li>
              <NavLink to="/sobre" className="nav-link">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/projetos" className="nav-link">Projetos</NavLink>
            </li>
          </ul>
        </Navigation>
      )}
      <ExternalLinks>
        <a href="https://www.linkedin.com/in/luis-david-6553a82b0/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/L-David89" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
      </ExternalLinks>
    </HeaderContainer>
  );
}