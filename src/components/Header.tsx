import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/about">À propos</Link>
          </li>
          <li>
            <Link href="/projects">Réalisations</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
