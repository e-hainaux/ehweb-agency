import React from "react";

import styles from "../../styles/Body.module.css";
import Hello from "./Hello";
import Story from "./Story";
import Misc from "./Misc";

export default function BodyAbout() {
  return (
    <article className={styles.mainContainer}>
      <Hello />
      <Story />
      <Misc />
    </article>
  );
}
