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
        <Project
          title="My Blog"
          link="blog.nick.exposed"
          href="http://blog.nick.exposed">
          A blog about my thoughts, experiences, and opinions. I try to write a
          post every Sunday. I will talk about topics like minimalism,
          meditation, budgeting, veganism, and occasionally software
          development.
        </Project>
      </GridItem>
    </Grid>
  </Section>
);

export default Projects;
