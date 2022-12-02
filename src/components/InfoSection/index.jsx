import React from "react";
import {
  Info,
  InfoContainer,
  InfoBg,
  ImageBg,
  InfoContent,
  InfoTopLine,
  InfoHeading,
  InfoDescription,
  InfoSvgWrap,
  InfoSvg,
  InfoWaveSvg,
} from "./InfoElements";
import Svg_1 from "./assets/svg-1.svg";
import Wave_Svg from "./assets/wave.svg";

const InfoSection = ({ lightBg, id, lightText, darkText }) => {
  return (
    <>
      <Info>
        <InfoContainer lightBg={lightBg} id={id}>
          <InfoBg>
            <ImageBg />
          </InfoBg>
          <InfoContent>
            <InfoTopLine>Premium Bank</InfoTopLine>
            <InfoHeading lightText={lightText}>
              Unlimited Transactions with zero fees
            </InfoHeading>
            <InfoDescription dartText={darkText}>
              Get access to our exclusive app that allows yout to send unlimited
              transactions without getting charged any fees.
            </InfoDescription>
            <InfoSvgWrap>
              <InfoSvg src={Svg_1} alt="svg-1" />
            </InfoSvgWrap>
          </InfoContent>
        </InfoContainer>
        <InfoWaveSvg src={Wave_Svg} alt="wave-svg" />
      </Info>
    </>
  );
};

export default InfoSection;
