import styles from './contact.module.scss';

export default function About() {
  return (
    <footer id="contact" className={styles.contact}>
      <div className={styles.info}>
        <span>
          <h3>Based In</h3>
          <p>Dallas, TX</p>
        </span>
          <span>
          <h3>Other Sites</h3>
          <p><a href="https://www.linkedin.com/in/jason-adams-44301081">LinkedIn</a></p>
          <p><a href="https://github.com/jasonadams023">GitHub</a></p>
        </span>
          <span>
          <h3>Contact</h3>
          <p><strong>Email:</strong> jasonadams023@gmail.com</p>
          <p><strong>Phone:</strong> (469)667-8807</p>
        </span>
      </div>

      <div className={styles.copyright}>
        Copyright &copy; Jason Adams 2019
      </div>
    </footer>
  );
}
