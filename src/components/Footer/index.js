import React from "react";
import { LBLS, MY_CONTACTS } from "../../constants";
import { Section, SectionText, SectionTitle } from "../../styles/Common";
import { SocialContainer, IconItem, IconsContainer } from "./styles";

const Footer = () => {
  return (
    <Section fullW vCenter hCenter bgColor="#242A3A">
      <SectionTitle>{LBLS.LBL_FIND_ME_ON}</SectionTitle>
      <SectionText>
        {' '}
      </SectionText>
      <IconsContainer>
        <SocialContainer>
          {MY_CONTACTS.map(({ url, icon: Icon, key }) => (
            <IconItem href={url} key={key} target="_blank">
              {Icon}
            </IconItem>
          ))}
        </SocialContainer>
      </IconsContainer>
    </Section>
  );
};

export default Footer;
