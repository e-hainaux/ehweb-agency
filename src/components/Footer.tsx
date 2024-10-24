import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Splitter from "./Splitter";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.mainContainer}>
      <div className={styles.footerInfos}>
        <div className={styles.catchPhrase}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Échangeons ensemble</h2>
            <div className={styles.centeredLink}>
              <Link href="/contact" className={styles.catchPhraseLink}>
                {" "}
                par ici
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Réseaux sociaux</h2>
          </div>
          <div className={styles.logosContainer}>
            <a
              className={`${styles.logo} ${styles.linkedIn}`}
              href="https://www.linkedin.com/in/e-hainaux"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              className={`${styles.logo} ${styles.gitHub}`}
              href="https://github.com/e-hainaux"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={40} />
            </a>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Navigation</h2>
          </div>

          <div className={styles.linksContainer}>
            <Link href="/" className={styles.link}>
              Accueil
            </Link>
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
        </div>
      </div>
      <Splitter />
      <div className={styles.credits}>
        <p>Emilien Hainaux © 2024</p>
      </div>
    </footer>
  );
}
