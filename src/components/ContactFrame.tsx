import React from "react";
import styles from "@/styles/ContactFrame.module.css";
import ContactButton from "./ContactButton";
import Splitter from "./Splitter";

export default function ContactFrame() {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.title}>Une estimation pour votre projet ?</div>
      <div className={styles.title}>Devis gratuit sur simple demande.</div>
      <ContactButton />
      <Splitter />
    </section>
  );
}
