import React from "react";
import styles from "../styles/Body.module.css";
import { CorporateImage } from "./CorporateImage";
import Splitter from "./Splitter";
import ServicesInfo from "./ServicesInfo";
import ContactFrame from "./ContactFrame";
import CreationSteps from "./CreationSteps";

export default function Body() {
  return (
    <main className={styles.mainContainer}>
      <CorporateImage />
      <Splitter />
      <ServicesInfo />
      <ContactFrame />
      <CreationSteps />
    </main>
  );
}
