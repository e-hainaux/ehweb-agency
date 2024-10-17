import React from "react";
import styles from "@/styles/about/Hello.module.css";

export default function Hello() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}> Hello !</h1>
      </div>
    </div>
  );
}
