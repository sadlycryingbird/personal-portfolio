"use client";

import Link from "next/link"; 
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    return (
      <nav className={styles.navbar} role='banner'>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link></li>
          <li className={styles.navItem}><Link href="/about">About</Link></li>
          <li className={styles.navItem}><Link href="/projects">Projects</Link></li>
          <li className={styles.navItem}><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
}