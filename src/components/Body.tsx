import React from "react";
import styles from "../styles/Body.module.css";
import FirstScreen from "./FirstScreen";

export default function Body() {
  return (
    <div className={styles.mainContainer}>
      <FirstScreen />
    </div>
  );
}
