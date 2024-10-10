import React from "react";
import styles from "../styles/FirstScreen.module.css";
import Image from "next/image";

export default function FirstScreen() {
  return (
    <div className={styles.mainContainer}>
      <Image
        src="/images/NewBisLogoEhWeb.png"
        width={150}
        height={150}
        alt="Logo Eh Web"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
