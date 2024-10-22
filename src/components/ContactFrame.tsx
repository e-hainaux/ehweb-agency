import React from "react";
import styles from "@/styles/ContactFrame.module.css";
import ContactButton from "./ContactButton";
import Splitter from "./Splitter";

export default function ContactFrame() {
  return (
    <section className={styles.mainContainer}>
      <p className={styles.question}>Une estimation pour votre projet ?</p>
      <p className={styles.answer}>Devis gratuit sur simple demande.</p>
      <ContactButton />
      <Splitter />
    </section>
  );
}
