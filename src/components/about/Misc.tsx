import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/about/Misc.module.css";
import { frameData } from "@/app/data/miscData";

export default function Misc() {
  const [isVisible, setIsVisible] = useState(false);
  const iconRef = useRef(null);

  useEffect(() => {
    const currentIconRef = iconRef.current;

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

    if (currentIconRef) {
      observer.observe(currentIconRef);
    }

    return () => {
      if (currentIconRef) {
        observer.unobserve(currentIconRef);
      }
    };
  }, []);

  return (
    <section className={styles.mainContainer}>
      {frameData.map((frame) => {
        const IconComponent = frame.picto;
        return (
          <div key={frame.id} className={styles.frameContainer}>
            <div
              ref={iconRef}
              className={`${styles.pictoContainer} ${
                isVisible ? styles.fadeIn : styles.fadeOut
              }`}
            >
              <IconComponent size={32} color="#e91e63" />{" "}
            </div>
            <div className={styles.textContainer}>
              <div className={styles.subTitle}>
                <h2>{frame.subtitle}</h2>
              </div>
              <div className={styles.paragraphsContainer}>
                <p className={styles.paragraph}>{frame.paragraph}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
