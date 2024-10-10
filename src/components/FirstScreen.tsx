import React from "react";
import styles from "../styles/FirstScreen.module.css";
import Image from "next/image";

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
        <Image
          src="/images/NewBisLogoEhWeb.png"
          width={300}
          height={300}
          alt="Logo Eh Web"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.splitter}></div>
      <div className={styles.h1}>La création web à votre écoute</div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/CorporateImage.png"
          width={300}
          height={300}
          alt="Logo Eh Web"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
