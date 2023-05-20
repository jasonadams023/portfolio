import styles from './about.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About</h2>

      <div>
        <span>Talented developer with a passion for solid and elegant solutions. Loves a challenge and is constantly
          learning. Works with a range of technologies to create diverse and versatile products.</span>
        <span>Calm and level-headed, able to work with diverse teams to produce high quality work under pressure.
          Intelligent, adaptable and highly motivated to create the best product.</span>

        <ul>
          <li>Full-stack web development</li>
          <li>Software development</li>
          <li>Game development</li>
        </ul>
      </div>
    </section>
  );
}
