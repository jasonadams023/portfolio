import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="intro-text">
              <span className="name">Jason Adams</span>
              <span className="skills">Software Developer</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
