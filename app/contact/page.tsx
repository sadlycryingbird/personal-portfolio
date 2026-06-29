import React from "react";
import styles from "../styles/Contact.module.css";

export default function ContactPage() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.title}>Get in Touch</h1>

        <p className={styles.description}>
          Interested in working together, discussing a project,
          or just saying hello? I'd love to hear from you.
        </p>

        <div className={styles.cards}>
          <a
            href="mailto:khizr1998@gmail.com"
            className={styles.card}
          >
            <h3>Email</h3>
            <p>Khizr1998@gmail.com</p>
          </a>
          <a
            href="https://linkedin.com/in/khizr-fazal"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>LinkedIn</h3>
            <p>Linkedin.com/in/khizr-fazal</p>
          </a>
          <a
            href="https://github.com/khizrfazal"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>GitHub</h3>
            <p>Github.com/khizrfazal</p>
          </a>
        </div>
      </div>
    </section>
  );
}