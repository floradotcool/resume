import preact from 'preact';
import styled from 'styled-components';

import Section from '../../components/Section';
import {Grid, GridItem} from '../../components/Grid';

const Skills = () => (
  <Section title="Skills">
    <Grid>
      <GridItem>
        <SkillsList>
          <Skill>Node / JS</Skill>
          <Skill>Scala / Play</Skill>
          <Skill>React</Skill>
        </SkillsList>
      </GridItem>
      <GridItem>
        <SkillsList>
          <Skill>Ruby / Rails</Skill>
          <Skill>SQL / NoSQL</Skill>
          <Skill>Responsive Web Design</Skill>
        </SkillsList>
      </GridItem>
      <GridItem>
        <SkillsList>
          <Skill>Respect</Skill>
          <Skill>Kindess</Skill>
          <Skill>Empathy</Skill>
        </SkillsList>
      </GridItem>
    </Grid>
  </Section>
);

const SkillsList = styled.ul`
  list-style-position: inside;
  margin: 0;
  padding: 0;

  @media (min-width: 960px), print {
    list-style: none;
    font-size: 0.75rem;
  }
`;

const Skill = styled.li`
  @media (min-width: 960px), print {
    margin-bottom: 0.25rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Skills;
