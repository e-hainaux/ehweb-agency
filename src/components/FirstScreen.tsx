import React from "react";
import styles from "../styles/FirstScreen.module.css";
import Image from "next/image";

export default function FirstScreen() {
  return (
    <div className={styles.mainContainer}>
      <Image
        src="/images/NewBisLogoEhWeb.png"
        width={300}
        height={300}
        alt="Logo Eh Web"
        style={{ objectFit: "contain" }}
      />
      <div className={styles.splitter}></div>
      <div className={styles.h1}>La création web à votre écoute</div>
    </div>
  );
}
