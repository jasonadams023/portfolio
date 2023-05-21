'use client';

import styles from './portfolio.module.scss';
import { useState } from 'react';

export default function Portfolio() {
  const [displayContent, setDisplayContent] = useState(false);

  let extendedContent = null;
  if (displayContent) {
    extendedContent = (
      <div>
        <p>Guildlands is a browser based web game. Uses a time based turn system and focuses on group management.
          Features a crafting system and live economy.</p>
        <a href="https://github.com/jasonadams023/guildlands">GitHub</a>
      </div>
    );
  }

  function onClick() {
    setDisplayContent(!displayContent);
  }

  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>Portfolio</h2>

      <ul>
        <li>
          <h3 onClick={onClick}>Guildlands</h3>
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

      {extendedContent}
    </section>
  );
}
