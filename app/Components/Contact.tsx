"use client";
import React from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Get in Touch</h2>
      <p className={styles.subtitle}>Feel free to reach out to me!</p>
      <div className={styles.links}>
        <a href="mailto:khizr1998@gmail.com" className={styles.link}>
          Email: khizr1998@gmail.com
        </a>
        <a href="https://linkedin.com/in/khizr-fazal" target="_blank" rel="noopener noreferrer" className={styles.link}>
          LinkedIn
        </a>
        <a href="https://github.com/sadlycryingbird/" target="_blank" rel="noopener noreferrer" className={styles.link}>
          GitHub
        </a>
      </div>
    </section>
  );
}
