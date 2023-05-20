import styles from './skills.module.scss';

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <h2>Skills</h2>

      <ul>
        <li>
          <b>Languages:</b> Java, Kotlin, Ruby, Golang, Swift, C++, C#, HTML, JavaScript, CSS, SQL, JSON
        </li>
        <li>
          <b>Tools:</b> Docker, Redis, Git, CircleCI, Jenkins, Jira, Grafana, Google Cloud Platform, PostgreSQL,
          Active Record, Groovy, npm, Unity, IntelliJ, Sublime
        </li>
        <li>
          <b>Testing:</b> Junit, Mockito, Jest, Mocha, Enzyme, Capybara
        </li>
        <li>
          <b>Frameworks:</b> Rails, Spring, MVC, Node, React.js, Microservices
        </li>
        <li>
          <b>Domains:</b> Entertainment, Health Care, Insurance
        </li>
        <li>
          <b>Methodologies:</b> Agile, Test Driven Development, Object Oriented Programming, Functional
          Programming
        </li>
      </ul>
    </section>
  );
}
