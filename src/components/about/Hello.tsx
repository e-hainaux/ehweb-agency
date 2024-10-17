import React from "react";
import styles from "@/styles/about/Hello.module.css";

export default function Hello() {
  return (
    <section className={styles.mainContainer}>
      <div></div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}> Hello !</h1>
      </div>
    </section>
  );
}
