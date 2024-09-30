import React from "react";
import { LBLS, Skills as Data } from "../../constants";
import { Section, SectionText, SectionTitle } from "../../styles/Common";
import { List, Container, Item, Paragraph, Title } from "./styles";

const Skills = () => (
  <Section id="skills">
    <SectionTitle divider>{LBLS.LBL_SKILL}</SectionTitle>
    <SectionText>
      {' '}
    </SectionText>
    <List>
      {Data.map((Skill) => (
        <Item key={Skill.slug}>
          <picture>
            <Skill.Component size="3rem" />
          </picture>
          <Container>
            <Title>{Skill.title}</Title>
            <Paragraph>
              <Skill.Description />
            </Paragraph>
          </Container>
        </Item>
      ))}
    </List>
  </Section>
);

export default Skills;
