import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/about/Misc.module.css";
import { FaRegHeart } from "react-icons/fa";

export default function Misc() {
  const [isVisible, setIsVisible] = useState(false);
  const iconRef = useRef(null);

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

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => {
      if (iconRef.current) {
        observer.unobserve(iconRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.mainContainer}>
      <div className={styles.frameContainer}>
        <div
          ref={iconRef}
          className={`${styles.pictoContainer} ${
            isVisible ? styles.fadeIn : styles.fadeOut
          }`}
        >
          <FaRegHeart size={32} color="#deb992" />{" "}
        </div>
        <div className={styles.textContainer}>
          <div className={styles.subTitle}>
            <h2>J&apos;aime</h2>
          </div>
          <div className={styles.paragraphsContainer}>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
              velit eget dolor euismod vulputate. Praesent facilisis accumsan
              orci, at sodales quam consequat in. Sed vitae magna at nisl
              eleifend malesuada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
