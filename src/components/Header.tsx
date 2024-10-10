"use client";
import React from "react";
import { useState } from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link
              href="/"
              className={`${styles.link} ${
                activeLink === "/" ? styles.active : ""
              }`}
              onClick={() => handleLinkClick("/")}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${styles.link} ${
                activeLink === "/about" ? styles.active : ""
              }`}
              onClick={() => handleLinkClick("/about")}
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`${styles.link} ${
                activeLink === "/projects" ? styles.active : ""
              }`}
              onClick={() => handleLinkClick("/projects")}
            >
              Réalisations
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${styles.link} ${
                activeLink === "/contact" ? styles.active : ""
              }`}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
