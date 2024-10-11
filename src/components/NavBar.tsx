import React from "react";
import styles from "@/styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";

interface NavBarProps {
  showLogo: boolean;
}

export default function NavBar({ showLogo }: NavBarProps) {
  return (
    <nav className={styles.mainContainer}>
      <div className={styles.leftGroup}>
        <Link href="/" className={styles.link}>
          Accueil
        </Link>
        {showLogo && (
          <Image
            src="/images/NewBisLogoEhWeb.png"
            alt="Header Logo"
            width={50}
            height={50}
            className={styles.logo}
          />
        )}
      </div>
      <div className={styles.rightGroup}>
        <Link href="/about" className={styles.link}>
          À propos
        </Link>
        <Link href="/projects" className={styles.link}>
          Réalisations
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
