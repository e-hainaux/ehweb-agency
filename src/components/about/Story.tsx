import React from "react";
import styles from "../../styles/about/Story.module.css";

export default function Body() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subTitle}>
        <h2>Mon parcours</h2>
      </div>
      <div className={styles.presentation}>
        <p className={styles.paragraph}>
          Développeur web & mobile fullstack en reconversion, j'ai choisi ce
          domaine après un bilan de compétences effectué quelques années
          auparavant.
        </p>
        <p className={styles.paragraph}>
          Je me suis initié aux bases du développement à l'aide de tutoriels et
          de cours en ligne. Autant attiré par l'aspect technique que créatif,
          je me suis lancé dans une formation à La Capsule en 2024, où j'ai
          acquis des compétences en JavaScript, Node.js, Express, React et React
          Native.
        </p>
        <p className={styles.paragraph}>
          J'ai réalisé dans la foulée deux projets en React.js en tant
          qu'indépendant. Un récent stage chez Grow Your Business a renforcé ma
          conviction d'être sur le bon chemin. Je recherche aujourd'hui un
          premier poste en CDI, que ce soit en backend, frontend ou fullstack.
        </p>
      </div>
    </div>
  );
}
