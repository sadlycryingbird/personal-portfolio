import Link from "next/link";
import styles from "./styles/Hero.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <h1>Khizr Fazal</h1>

        <h2>Backend-Focused Software Engineer</h2>

        <p className={styles.description}>
          I build reliable backend systems and modern web applications using
          Java, Spring Boot, PostgreSQL, Next.js and TypeScript.
        </p>

        <div className={styles.techStack}>
          <span>Java</span>
          <span>Spring Boot</span>
          <span>PostgreSQL</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Docker</span>
        </div>

        <div className={styles.buttons}>
          <Link href="/projects" className={styles.primaryButton}>
            View Projects
          </Link>

          <Link href="/contact" className={styles.secondaryButton}>
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}