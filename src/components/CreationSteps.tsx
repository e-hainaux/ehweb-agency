import React from "react";
import styles from "@/styles/CreationSteps.module.css";
import Image from "next/image";
import { stepsOfCreation } from "@/app/data/stepsOfCreation";
import Splitter from "./Splitter";

export default function CreationSteps() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainTitleContainer}>
        <h1 className={styles.mainTitle}>Étapes de création de votre projet</h1>
      </div>
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
      </div>

      {stepsOfCreation.map((step) => (
        <div
          key={step.id}
          className={`${styles.serviceContainer} ${
            step.id % 2 === 0 ? styles.reverse : ""
          }`}
        >
          <div className={styles.textContainer}>
            <div className={styles.textWrapper}>
              <h2 className={styles.title}>{step.title}</h2>
              <p className={styles.paragraph}>
                {Array.isArray(step.paragraph)
                  ? step.paragraph.map((text, index) => (
                      <span key={index}>
                        {text}
                        <br />
                      </span>
                    ))
                  : step.paragraph}
              </p>
            </div>
          </div>
          <div className={styles.voidContainer}></div>

          <div className={styles.imageContainer}>
            <Image
              src={step.imageUrl}
              alt={step.title}
              width={681}
              height={419}
              quality={100}
              className={styles.picto}
            />
          </div>
        </div>
      ))}
      <Splitter />
    </div>
  );
}
