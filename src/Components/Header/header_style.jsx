import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #161515;
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 99999;

  @media screen and (max-width: 768px) {
    height: ${(props) => (props.isExpanded ? "50vh" : "30vh")};
    width: 100%;
    transition: height 0.3s ease;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 9999;
  }
`;

export const Logo = styled.img`
  width: 6vw;
  margin-bottom: 1rem;
  margin-left: 2%;

  @media screen and (max-width: 768px) {
    margin-right: 8%;
    width: 6vw;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;

  ul {
    list-style: none;
    padding: 0;
    margin-left: 8%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 80vw;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
      justify-content: space-around;
      margin-right: 8%;
    }
  }

  .nav-link {
    text-decoration: none;
    font-weight: bold;
    font-size: 2.2rem;
    transition: color 0.3s ease;
    color: white;

    &:hover {
      color: #1a0b6ed4;
    }

    @media screen and (max-width: 768px) {
      font-size: 0.6rem;
      margin-right: 50%;
      color: white;
    }
  }
`;

export const ExternalLinks = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 2%;
  gap: 1rem;

  img {
    height: 4vw;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    margin-right: 4%;
  }
`;
