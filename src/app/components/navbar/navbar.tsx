import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="#page-top">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
