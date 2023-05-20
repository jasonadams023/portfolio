import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.name}>Jason Adams</div>
      <div className={styles.role}>Senior Software Engineer</div>
    </header>
  );
}
