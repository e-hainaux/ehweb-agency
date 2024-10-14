import React from "react";
import styles from "../styles/FirstScreen.module.css";
import Image from "next/image";
import Splitter from "./Splitter";

interface FirstScreenProps {
  isLogoVisible: boolean;
}

export default function FirstScreen({ isLogoVisible }: FirstScreenProps) {
  return (
    <div className={styles.mainContainer}>
      <div
        className={`${styles.logoContainer} ${
          isLogoVisible ? styles.visible : styles.hidden
        }`}
      >
        <div className={styles.logoContainer}>
          <Image
            src="/images/NewEhWebLogo.svg"
            width={150}
            height={150}
            alt="Logo Eh Web"
            style={{ width: "50%", height: "auto", objectFit: "contain" }}
          />
        </div>
      </div>
      <Splitter />
      <div className={styles.h1}>La création web à votre écoute</div>
    </div>
  );
}
