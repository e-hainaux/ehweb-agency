import React from "react";
import styles from "../styles/ContactButton.module.css";

export default function ContactButton() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Contactez-moi !</button>
      </div>
    </div>
  );
}
