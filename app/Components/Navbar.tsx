import Link from "next/Link";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
    return (
      <nav>
        <ul>
          <li><Link href="/" className={styles.link}>Home</Link></li>
          <li><Link href="/about" className={styles.link}>About</Link></li>
          <li><Link href="/projects" className={styles.link}>Projects</Link></li>
          <li><Link href="/contact" className={styles.link}>Contact</Link></li>
        </ul>
      </nav>
    );
}