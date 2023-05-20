import styles from './portfolio.module.scss';

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>Portfolio</h2>

      <ul>
        <li>
          <h3>Guildlands</h3>
          <p>Browser based game</p>
        </li>
        <li>
          <h3>Crazy Cab</h3>
          <p>Mobile game</p>
        </li>
        <li>
          <h3>Tic Tac Toe</h3>
          <p>Tic Tac Toe implemented with React</p>
        </li>
        <li>
          <h3>Cookie Quest</h3>
          <p>Experimental game utilizing cookies</p>
        </li>
        <li>
          <h3>E-commerce</h3>
          <p>E-commerce template</p>
        </li>
        <li>
          <h3>Movie Reviews</h3>
          <p>Movie review site</p>
        </li>
      </ul>
    </section>
  );
}
