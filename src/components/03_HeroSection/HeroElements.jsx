import styled from "styled-components";
import { MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #e0fffe;
  display: flex;
  justify-content: center;
  padding: 0 30px;
  height: 632px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 70%;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 44px;
  padding-top: 25%;

  @media screen and (max-width: 768px) {
    font-size: 38px;
    transition: all 0.2 ease-in-out;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
    transition: all 0.2 ease-in-out;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    transition: all 0.2 ease-in-out;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    transition: all 0.2 ease-in-out;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
