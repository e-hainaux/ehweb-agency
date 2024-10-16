import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Splitter from "./Splitter";

export default function Footer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.footerInfos}>
        <div className={styles.phone}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Téléphone</h2>
          </div>

          <div className={styles.descriptionContainer}>
            <p className={styles.description}>06 12 34 56 78</p>
            <p className={styles.description}>Du lundi au vendredi</p>
            <p className={styles.description}>9h00 - 18h00</p>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Réseaux sociaux</h2>
          </div>
          <div className={styles.logosContainer}>
            <a
              href="https://fr.linkedin.com/in/e-hainaux"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/LinkedInLogo.svg"
                alt="LinkedIn Logo"
                width={54}
                height={54}
                className={styles.logo}
              />
            </a>
            <a
              href="https://www.malt.fr/profile/emilienh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/MaltLogo.svg"
                alt="Malt Logo"
                width={150}
                height={52}
                className={styles.logo}
              />
            </a>
          </div>
        </div>
        <div className={styles.location}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Localisation</h2>
          </div>

          <div className={styles.descriptionContainer}>
            <p className={styles.description}>Proche d’Arras</p>
            <p className={styles.description}>Déplacements possibles</p>
            <p className={styles.description}>sur Lille ou Paris</p>
          </div>
        </div>
      </div>
      <Splitter />
      <div className={styles.credits}>
        <p>Emilien Hainaux © 2024</p>
      </div>
    </div>
  );
}
