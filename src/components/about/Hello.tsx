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
          width={500}
          height={500}
          quality={100}
          priority={true}
          alt="Photo of Emilien"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </div>
      <div className={styles.introductionContainer}>
        <div
          className={`${styles.titleContainer} ${
            !isVisible ? styles.hiddenRight : ""
          }`}
        >
          <h1 className={styles.title}>Bonjour !</h1>
          <h2 className={styles.subTitle}>Moi, c&apos;est Emilien.</h2>
        </div>
        <div className={styles.paragraphContainer}>
          <p
            className={`${styles.paragraph} ${
              !isVisible ? styles.hiddenBottom : ""
            }`}
          >
            Je suis développeur web fullstack junior.
          </p>
        </div>
      </div>
    </section>
  );
}
