import React from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "@/styles/contact/ContactIntro.module.css";

export default function ContactIntro() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <p className={styles.question}>Un projet ?</p>
        <p className={styles.question}>Une idée ?</p>
        <p className={styles.answer}>Lancez-vous !</p>
        <FaChevronDown className={styles.icon} />
      </div>
    </div>
  );
}
