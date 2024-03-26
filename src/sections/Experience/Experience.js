import Section from "../../components/Section";
import Job from "../../components/Job";

const Experience = () => (
  <Section title="Experience">
    <Job
      title="Software Engineer, Senior"
      company="HubSpot"
      time="Jan 2022–Oct 2023"
    >
      <li>
        Designed and built a new developer marketplace using React, Redux, and
        Typescript.
      </li>
      <li>
        Migrated the legacy marketplace codebase from JavaScript to Typescript.
      </li>
    </Job>
    <Job
      title="Software Engineer, Senior"
      company="Evernote"
      time="Apr 2020–Mar 2021"
    >
      <li>
        Created a performant, consistent Editor experience across all Evernote
        clients using React, React Native, Redux, and ProseMirror.
      </li>
      <li>
        Built the integration to support Google Drive in the new Evernote
        editor.
      </li>
    </Job>
    <Job title="Founder" company="hearling.com" time="Nov 2019–Present">
      <li>Designed, developed, and launched my first SaaS business.</li>
      <li>Scaled performance to support over 2,000 monthly active users.</li>
    </Job>
    <Job
      title="Software Engineer"
      company="Redbubble"
      time="Sep 2018–July 2019"
    >
      <li>
        Scaled ads distribution to 30+ more countries using Ruby on Rails.
      </li>
      <li>
        Migrated product pages from a monolithic rails app to an Express and
        React microservice.
      </li>
    </Job>
    <Job title="Software Engineer" company="Leapfin" time="Feb 2018–July 2018">
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
      time="Aug 2015–Feb 2017"
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
