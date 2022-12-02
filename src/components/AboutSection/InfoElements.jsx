import styled from "styled-components";

export const Info = styled.div`
  padding: 0px;
  margin: 0px;
`;

export const InfoContainer = styled.div`
  background: #e0fffe;
  display: flex;
  justify-content: center;
  padding: 0 30px;
  height: 632px;
  position: relative;
  z-index: 1;
`;

export const InfoBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoContent = styled.div`
  z-index: 3;
  max-width: 80%;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
`;

export const InfoTopLine = styled.h1`
  color: #002762;
  font-size: 24px;
  padding-top: 10px;

  @media screen and (max-width: 480px) {
    font-size: 20px;
    transition: all 0.2 ease-in-out;
  }
`;

export const InfoHeading = styled.p`
  color: #002762;
  font-size: 36px;
  padding-top: 10px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    transition: all 0.2 ease-in-out;
  }
`;

export const InfoDescription = styled.p`
  margin-top: 20px;
  color: #002762;
  font-size: 16px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    transition: all 0.2 ease-in-out;
  }
`;

export const InfoSvgWrap = styled.div`
  align-items: center;
`;

export const InfoSvg = styled.img`
  width: 60%;
`;

export const InfoWaveSvg = styled.img`
background: #e0fffe;
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: 1;
  
`;