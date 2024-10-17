import React from "react";
import styles from "../../styles/Body.module.css";
import Hello from "./Hello";

export default function Body() {
  return (
    <div className={styles.mainContainer}>
      <Hello />
    </div>
  );
}
