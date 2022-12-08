import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesDiv,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import "./index.css";

import Icon1 from "./assets/svg-1.svg";
import Icon2 from "./assets/svg-2.svg";
import Icon3 from "./assets/svg-3.svg";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesDiv>
        <ServicesH1>Our Services</ServicesH1>
      </ServicesDiv>
      <ServicesDiv>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesP>
              We help reduce your fees and increase your overall revenue.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>
              You can access our platform online anywhere in the world.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>
              Unlock our special membership card that returns 5% cash back...
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesDiv>
    </ServicesContainer>
  );
};

export default Services;
