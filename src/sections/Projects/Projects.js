import preact from 'preact';

import Section from '../../components/Section';
import {Grid, GridItem} from '../../components/Grid';
import Project from '../../components/Project';

const Projects = () => (
  <Section title="Projects">
    <Grid>
      <GridItem>
        <Project
          title="Sound of Text"
          link="soundoftext.com"
          href="https://soundoftext.com">
          A modern, responsive web application which lets users download TTS MP3
          files for many different languages. Used by language learners around
          the world — attracting 20,000 visitors per day. Uses the Google
          Translate API.
        </Project>
      </GridItem>
      <GridItem>
        <Project
          title="KC Photography"
          link="kaitlynclink.com"
          href="http://kaitlynclink.com">
          A website that I built for my cousin to showcase her photography work
          and attract clients while she grows her photography business.
          Designed, developed, and hosted by me using plain old html and css.
        </Project>
      </GridItem>
      <GridItem>
        <Project title="Pouch" link="pouch.party" href="http://pouch.party">
          A meant-for-fun web application that allows you to view your bank
          account balance in terms of gold, silver, and copper — inspired by
          World of Warcraft. A work in progress.
        </Project>
      </GridItem>
    </Grid>
  </Section>
);

export default Projects;
