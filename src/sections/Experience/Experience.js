import preact from 'preact';

import Section from '../../components/Section';
import Job from '../../components/Job';

const Experience = () => (
  <Section title="Experience">
    <Job
      title="Software Engineer"
      company="Redbubble"
      time="Sep 2018 to July 2019">
      <li>Maintained the sole ads distribution engine for the company.</li>
      <li>Added automated ticket handling in Zendesk for certain consumer tickets.</li>
      <li>
        Migrated product pages from a monolithic rails app to an Express and
        React micro service.
      </li>
    </Job>
    <Job
      title="Full-Stack Software Engineer"
      company="Leapfin"
      time="Feb 2018 to July 2018">
      <li>Self-managed my time and priorities while working at a startup.</li>
      <li>
        Launched the effort to support full-time remote employees on the
        Engineering team.
      </li>
      <li>
        Introduced Agile XP practices such as pairing, retrospectives, and TDD.
      </li>
    </Job>
    <Job
      title="Full-Stack Web Developer"
      company="Self-Employed"
      time="Mar 2017 to Dec 2017">
      <li>Scaled a personal web application to 20,000 daily users.</li>
      <li>
        Partnered with local startups to fulfill their custom web development
        needs.
      </li>
      <li>
        Managed personal time and business finances to run a sustainable
        business.
      </li>
    </Job>
    <Job
      title="Software Engineer"
      company="Asynchrony Labs"
      time="Aug 2015 to Feb 2017">
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
