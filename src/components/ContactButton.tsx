import React from "react";
import styles from "../styles/ContactButton.module.css";
import Link from "next/link";

export default function ContactButton() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.buttonContainer}>
        <Link href="/contact" className={styles.link}>
          <button className={styles.button}>Contactez-moi !</button>
        </Link>
      </div>
    </div>
  );
}
