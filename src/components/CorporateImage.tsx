import React from "react";
import Image from "next/image";
import styles from "../styles/CorporateImage.module.css";

export function CorporateImage() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="/images/CorporateImage.png"
        width={1800}
        height={1200}
        quality={100}
        alt="Logo Eh Web"
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
    </div>
  );
}
