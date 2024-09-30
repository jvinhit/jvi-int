import React from "react";
import styled from "styled-components";
import { HobbiesData, LBLS } from "../../constants";
import { Section, SectionText, SectionTitle } from "../../styles/Common";
import { Title, Item } from "../Skills/styles";

const TitleH = styled(Title)`
  font-size: 20px;
  font-weight: 600;
  padding-left: 8px;
  color: rgba(255,255,255,0.75);

`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  color: rgba(255,255,255,0.75);
`;

const Hobbies = () => {
  return (
    <Section>
      <SectionTitle divider>{LBLS.LBL_HOBBIES}</SectionTitle>
      <SectionText> </SectionText>
      <Container>
        {HobbiesData.map(({ Icon, text }) => (
          <Item key={Math.random()}>
            <picture>{Icon}</picture>
            <TitleH>{text}</TitleH>
          </Item>
        ))}
      </Container>
    </Section>
  );
};

export default React.memo(Hobbies);
