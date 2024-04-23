import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const Logo = styled.img`
  width: 100px;

  @media screen and (max-width: 768px) {
    align-self: flex-start; 
    width: 50px; 
    margin-bottom: 1rem; 
  }
`;

export const Navigation = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center; 
    margin-left: 10rem;

    @media screen and (max-width: 768px) {
      flex-direction: row; 
    }
  }

  li {
    margin-right: 2rem;

    @media screen and (max-width: 768px) {
      margin-right: 0; 
      margin-bottom: 1rem; 
    }
  }

  .nav-link {
    color: white;
    text-decoration: none;
    font-size: 2.2rem;
    margin-right: 4rem; 
  }
`;

export const ExternalLinks = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 1rem; 
  }

  img {
    width: 40px;
    margin-left: 1rem;
    cursor: pointer;
  }
`;