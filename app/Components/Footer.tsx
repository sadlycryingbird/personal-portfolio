"use client";

import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer} role='contentinfo'>
            <p>© {new Date().getFullYear()} Khizr Fazal. All rights reserved.</p>
            <ul>
                <li>
                    <a href="https://github.com/sadlycryingbird" target="_blank" rel="noopener no referrer">
                        Github
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/khizr-fazal" target="_blank" rel="noopener noreferrer">
                        LinkedIn                   
                    </a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </footer>
    )
}