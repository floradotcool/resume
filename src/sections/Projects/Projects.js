import preact from "preact";

import Section from "../../components/Section";
import { Grid, GridItem } from "../../components/Grid";
import Project from "../../components/Project";

const Projects = () => (
  <Section title="Projects">
    <Grid>
      <GridItem>
        <Project
          title="Hearling"
          link="hearling.com"
          href="https://hearling.com"
        >
          A subscription service built on a freemium model meant to help
          language-learners and media creators have easier access to
          high-quality text-to-speech technology. Hearling is the paid successor
          to soundoftext.com.
        </Project>
      </GridItem>
      <GridItem>
        <Project
          title="Sound of Text"
          link="soundoftext.com"
          href="https://soundoftext.com"
        >
          A modern, responsive web application which lets users download TTS MP3
          files for many different languages. Used by language learners around
          the world, attracting 20,000 visitors per day.
        </Project>
      </GridItem>
      <GridItem>
        <Project
          title="scape.fashion"
          link="scape.fashion"
          href="https://scape.fashion"
        >
          A passion project for helping players of Old School Runescape to find
          aesthetic outfits. Imports and scans thousands of in-game items for
          their color palette and gives players outfit suggestions.
        </Project>
      </GridItem>
    </Grid>
  </Section>
);

export default Projects;
