import React from "react";
import styles from "@/styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";

interface NavBarProps {
  showLogo: boolean;
  isNavBarTransparent: boolean;
}

export default function NavBar({ showLogo, isNavBarTransparent }: NavBarProps) {
  const navBarStyle = isNavBarTransparent
    ? styles.transparent
    : styles.blurryOpacity;

  return (
    <nav className={`${styles.mainContainer} ${navBarStyle}`}>
      <div className={styles.leftGroup}>
        <Link href="/" className={styles.link}>
          Accueil
        </Link>
        <div className={styles.logoContainer}>
          <Image
            src="/images/NewEhWebLogo.svg"
            alt="Header Logo"
            width={50}
            height={50}
            className={`${styles.logo} ${showLogo ? styles.show : styles.hide}`}
          />
        </div>
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
