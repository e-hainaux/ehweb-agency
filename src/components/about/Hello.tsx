import React, { useState, useEffect } from "react";
import styles from "@/styles/about/Hello.module.css";
import Image from "next/image";

export default function Hello() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 10;

      if (scrollTop > threshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.mainContainer}>
      <div
        className={`${styles.imageContainer} ${
          !isVisible ? styles.hiddenLeft : ""
        }`}
      >
        <Image
          src="/images/headPic.png"
          width={1000}
          height={1000}
          quality={100}
          alt="Logo Eh Web"
          style={{ width: "auto", height: "100%", objectFit: "contain" }}
        />
      </div>
      <div
        className={`${styles.introductionContainer} ${
          !isVisible ? styles.hiddenRight : ""
        }`}
      >
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Bonjour !</h1>
        </div>
        <div className={styles.paragraphsContainer}>
          <p className={styles.paragraph}>Moi, c'est Emilien.</p>
          <p className={styles.paragraph}>
            Je suis développeur web fullstack junior.
          </p>
        </div>
      </div>
    </section>
  );
}
