import Link from "next/link"; 
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>© {new Date().getFullYear()} Khizr Fazal. All rights reserved.</p>
        <ul>
          <li>
            {/* External links should use <a> */}
            <a href="https://github.com/sadlycryingbird" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/khizr-fazal" target="_blank" rel="noopener noreferrer">
              LinkedIn                   
            </a>
          </li>
          <li>
            {/* Internal links should use <Link> */}
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}