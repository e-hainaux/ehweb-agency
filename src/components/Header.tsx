"use client";
import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  showHeaderLogo: boolean;
}

export default function Header({ showHeaderLogo }: HeaderProps) {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <header className={styles.mainContainer}>
      <nav className={styles.nav}>
        <div className={styles.leftGroup}>
          <Link
            href="/"
            className={`${styles.link} ${
              activeLink === "/" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("/")}
          >
            Accueil
          </Link>
          <div
            className={`${styles.logoContainer} ${
              showHeaderLogo ? styles.show : ""
            }`}
          >
            <Image
              src="/images/NewBisLogoEhWeb.png"
              alt="Header Logo"
              width={50}
              height={50}
              className={styles.logo}
            />
          </div>
        </div>
        <div className={styles.rightGroup}>
          <Link
            href="/about"
            className={`${styles.link} ${
              activeLink === "/about" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("/about")}
          >
            À propos
          </Link>
          <Link
            href="/projects"
            className={`${styles.link} ${
              activeLink === "/projects" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("/projects")}
          >
            Réalisations
          </Link>
          <Link
            href="/contact"
            className={`${styles.link} ${
              activeLink === "/contact" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
