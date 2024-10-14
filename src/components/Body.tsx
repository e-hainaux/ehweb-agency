import React from "react";
import styles from "../styles/Body.module.css";
import { CorporateImage } from "./CorporateImage";
import Splitter from "./Splitter";
import ServicesInfo from "./ServicesInfo";

export default function Body() {
  return (
    <div className={styles.mainContainer}>
      <CorporateImage />
      <Splitter />
      <ServicesInfo />
    </div>
  );
}
