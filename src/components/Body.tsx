import React from "react";
import styles from "../styles/Body.module.css";
import { CorporateImage } from "./CorporateImage";
import Splitter from "./Splitter";
import ServicesInfo from "./ServicesInfo";
import ContactFrame from "./ContactFrame";
import CreationSteps from "./CreationSteps";
import FirstScreen from "./FirstScreen";

interface BodyProps {
  isFirstScreenLogoVisible: boolean;
}

export default function Body({ isFirstScreenLogoVisible }: BodyProps) {
  return (
    <main className={styles.mainContainer}>
      <FirstScreen isLogoVisible={isFirstScreenLogoVisible} />
      <CorporateImage />
      <Splitter />
      <ServicesInfo />
      <ContactFrame />
      <CreationSteps />
    </main>
  );
}
