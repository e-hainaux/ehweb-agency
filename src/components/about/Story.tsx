import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/about/Story.module.css";
import Image from "next/image";

export default function Story() {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div
        ref={imageRef}
        className={`${styles.imageContainer} ${
          isVisible ? styles.fadeIn : styles.fadeOut
        }`}
      >
        <Image
          src="/images/Emilien5.png"
          width={500}
          height={500}
          quality={100}
          alt="Photo of Emilien"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </div>
      <div className={styles.storyContainer}>
        <div className={styles.subTitle}>
          <h2>Mon parcours</h2>
        </div>
        <div className={styles.presentation}>
          <p className={styles.paragraph}>
            Développeur web &amp; mobile fullstack en reconversion, j&apos;ai
            choisi ce domaine après un bilan de compétences effectué quelques
            années auparavant.
          </p>
          <p className={styles.paragraph}>
            Je me suis initié aux bases du développement à l&apos;aide de
            tutoriels et de cours en ligne. Autant attiré par l&apos;aspect
            technique que créatif, je me suis lancé dans une formation à La
            Capsule en 2024, où j&apos;ai acquis des compétences en JavaScript,
            Node.js, Express, React et React Native.
          </p>
          <p className={styles.paragraph}>
            J&apos;ai réalisé dans la foulée deux projets en React.js en tant
            qu&apos;indépendant. Un récent stage chez Grow Your Business a
            renforcé ma conviction d&apos;être sur le bon chemin. Je recherche
            aujourd&apos;hui un premier poste en CDI, que ce soit en backend,
            frontend ou fullstack.
          </p>
        </div>
      </div>
    </div>
  );
}
