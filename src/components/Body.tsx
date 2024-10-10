import React from "react";
import styles from "../styles/Body.module.css";
import FirstScreen from "./FirstScreen";

interface BodyProps {
  isFirstScreenLogoVisible: boolean;
}

export default function Body({ isFirstScreenLogoVisible }: BodyProps) {
  return (
    <div className={styles.mainContainer}>
      <FirstScreen isLogoVisible={isFirstScreenLogoVisible} />
    </div>
  );
}
