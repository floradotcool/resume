import preact from "preact";

import Section from "../../components/Section";
import Job from "../../components/Job";

const Experience = () => (
  <Section title="Experience">
    <Job
      title="Software Engineer, Senior"
      company="Evernote"
      time="Apr 2020 to present"
    >
      <li>
        Created a performant, consistent Editor experience across all Evernote
        clients.
      </li>
      <li>
        Led the effort to integrate Google Drive into the new Evernote Editor.
      </li>
    </Job>
    <Job title="Founder" company="Hearling" time="Nov 2019 to present">
      <li>Designed, developed, and launched my first SaaS business.</li>
      <li>Reached over 1,000 sign ups during the first month of service.</li>
    </Job>
    <Job
      title="Software Engineer"
      company="Redbubble"
      time="Sep 2018 to July 2019"
    >
      <li>Scaled ads distribution to 30+ more countries.</li>
      <li>
        Migrated product pages from a monolithic rails app to an Express and
        React micro service.
      </li>
    </Job>
    <Job
      title="Software Engineer"
      company="Leapfin"
      time="Feb 2018 to July 2018"
    >
      <li>
        Launched the effort to support full-time remote employees in
        Engineering.
      </li>
      <li>
        Introduced Agile XP practices such as pairing, retrospectives, and TDD.
      </li>
    </Job>
    <Job
      title="Software Engineer"
      company="Asynchrony Labs"
      time="Aug 2015 to Feb 2017"
    >
      <li>
        Built a Master Data Management solution using Scala, Play, Kafka, and
        Neo4j.
      </li>
      <li>
        Worked with Agile teams practicing TDD, pair programming, and kanban.
      </li>
    </Job>
  </Section>
);

export default Experience;
