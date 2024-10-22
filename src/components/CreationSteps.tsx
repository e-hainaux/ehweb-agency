import React, { useEffect, useRef, useState, ElementType } from "react";
import styles from "@/styles/CreationSteps.module.css";
import { stepsOfCreation } from "@/app/data/stepsOfCreation";
import Splitter from "./Splitter";

interface Step {
  id: number;
  title: string;
  paragraph: string | string[];
  picto: ElementType;
}

interface AnimatedStepProps {
  step: Step;
  isEven: boolean;
}

const AnimatedStep: React.FC<AnimatedStepProps> = ({ step, isEven }) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);
  const Picto = step.picto;

  useEffect(() => {
    const currentRef = stepRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Mise à jour de la visibilité en fonction de l'état d'intersection
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3,
        // Ajout d'une marge pour déclencher l'observation un peu plus tôt/tard
        rootMargin: "50px",
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={stepRef}
      className={`${styles.stepContainer} ${isEven ? styles.reverse : ""} ${
        isVisible ? styles.slideIn : styles.slideOut
      }`}
    >
      <div className={styles.textContainer}>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>{step.title}</h2>
          <p className={styles.paragraph}>
            {Array.isArray(step.paragraph)
              ? step.paragraph.map((text: string, index: number) => (
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
      <div className={styles.iconContainer}>
        <Picto className={styles.picto} />
      </div>
    </div>
  );
};

const CreationSteps: React.FC = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.mainTitleContainer}>
        <h1 className={styles.mainTitle}>Étapes de création de votre projet</h1>
      </div>
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
      </div>

      {stepsOfCreation.map((step) => (
        <AnimatedStep key={step.id} step={step} isEven={step.id % 2 === 0} />
      ))}
      <Splitter />
    </section>
  );
};

export default CreationSteps;
