import React from "react";

import styles from "@/styles/contact/ContactIntro.module.css";

export default function ContactIntro() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <p className={styles.text}>Un projet ?</p>
        <p className={styles.text}>Une idée ?</p>
        <p className={styles.text}>Lancez-vous !</p>
      </div>
    </div>
  );
}
