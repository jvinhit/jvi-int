import React from "react";
import { Section, SectionText, SectionTitle } from "../../styles/Common";
import { Avatar } from "./styles";
import avatar from "./avatar.jpeg";
import { INTRO_INFO } from "../../constants";

const Hero = (props) => (
  <Section fullW vCenter hCenter animBg>
    <SectionTitle main center>
      {INTRO_INFO.title}
    </SectionTitle>
    <Avatar src={avatar} />
    <SectionText center>{INTRO_INFO.subtitle}</SectionText>
    <SectionText>
      {INTRO_INFO.desc}
    </SectionText>
  </Section>
);

export default Hero;
