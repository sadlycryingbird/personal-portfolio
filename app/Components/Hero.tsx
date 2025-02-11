"use client";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
        <div className={styles.heroContainer}>
            <h1>Hi, I'm Khizr Fazal 👋</h1>
            <p>Junior Developer | Next.js & TypeScript Enthusiast</p>
            <a href="/projects" className={styles.cta}>View My Work</a>
        </div>
    </section>
  );
}