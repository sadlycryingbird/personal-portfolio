"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar} role="banner">
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link
            href="/"
            className={pathname === "/" ? styles.active : ""}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            href="/about"
            className={pathname === "/about" ? styles.active : ""}
            aria-current={pathname === "/about" ? "page" : undefined}
          >
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            href="/projects"
            className={pathname === "/projects" ? styles.active : ""}
            aria-current={pathname === "/projects" ? "page" : undefined}
          >
            Projects
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            href="/contact"
            className={pathname === "/contact" ? styles.active : ""}
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}