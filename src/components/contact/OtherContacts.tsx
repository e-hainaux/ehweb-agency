import React from "react";

import styles from "@/styles/contact/OtherContacts.module.css";
import Image from "next/image";

export default function OtherContacts() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <p className={styles.text}>Un projet ?</p>
        <p className={styles.text}>Une idée ?</p>
        <p className={styles.text}>Lancez-vous !</p>
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
  );
}
