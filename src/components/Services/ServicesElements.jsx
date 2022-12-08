import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 780px;
  background: #000025;
  @media (max-width: 768px) {
    height: 1100px;
  }
  @media (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 0 20px;
  margin-bottom: 40px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 90px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 440px;
  padding: 30px;
  box-shadow: 0px 0px 2px 3px #18ecdc;
  transition: all 0.2s ease-in-out;
  @media (max-width: 1000px) {
    max-width: 340px;
    max-height: 340px;
  }
  @media (max-width: 768px) {
    max-width: 360px;
    max-height: 380px;
  }
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 20px 5px #18ecdc;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 90%;
  width: 90%;
  margin-bottom: 10px;
  @media (max-width: 1000px) {
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    max-width: 360px;
    max-height: 380px;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 64px;
  color: #18ecdc;
  border-bottom: 2px solid #18ecdc;
  @media (max-width: 480px) {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000025;
`;

export const ServicesP = styled.h2`
  font-size: 1.2rem;
  color: #000025;
  text-align: center;
`;
