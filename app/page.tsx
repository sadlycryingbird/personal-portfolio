import styles from "./styles/Hero.module.css";

export default function Home() {
      return (
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <h1>Hi, I'm Khizr 👋</h1>
                <p>Junior Full-Stack Developer | Passionate About Scalable Systems</p>
                <a href="/projects" className={styles.cta}>View My Work</a>
            </div>
        </section>
      );
  }