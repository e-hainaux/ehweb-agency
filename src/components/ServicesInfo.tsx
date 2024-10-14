import React from "react";
import styles from "@/styles/ServicesInfo.module.css";
import Image from "next/image";

export default function ServicesInfo() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/networkPicto.png"
          alt="Header Logo"
          width={681}
          height={419}
          quality={100}
          className={styles.picto}
        />
      </div>
      <div className={styles.voidContainer}></div>
      <div className={styles.textContainer}>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Site monopage</h2>
          <p className={styles.paragraph}>
            Un site vitrine moderne vous permet de communiquer sur votre
            activité de manière simple au plus grand nombre.
          </p>
        </div>
      </div>
    </div>
  );
}
