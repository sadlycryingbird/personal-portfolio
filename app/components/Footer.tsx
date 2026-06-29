import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <ul className={styles.footerLinks}>
          <li>
            <a
              href="https://github.com/khizrfazal"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/khizr-fazal"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <p>© {new Date().getFullYear()} Khizr Fazal. All rights reserved.</p>
      </div>
    </footer>
  );
}