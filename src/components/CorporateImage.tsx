import React from "react";
import Image from "next/image";
import styles from "../styles/CorporateImage.module.css";

export function CorporateImage() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="/images/CorporateImage.png"
        width={300}
        height={300}
        quality={100}
        alt="Logo Eh Web"
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
    </div>
  );
}
