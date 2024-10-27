"use client";
import styles from "../styles/LoadingScreen.module.css";

interface LoadingScreenProps {
  progress: number;
  isTransitioning: boolean;
}

export default function LoadingScreen({
  progress,
  isTransitioning,
}: LoadingScreenProps) {
  return (
    <div
      className={`${styles.progressContainer} ${
        isTransitioning ? styles.fadeOut : ""
      }`}
    >
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      ></div>
      <div className={styles.progressText}>
        Chargement en cours {Math.round(progress)}%
      </div>
    </div>
  );
}
