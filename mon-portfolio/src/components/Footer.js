import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Mon Portfolio — Construit avec Next.js</p>
      <div className={styles.links}>
        <a href="https://github.com/tonprofil" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:tonemail@example.com">Email</a>
      </div>
    </footer>
  );
}
