import React from "react";
import styles from "@/styles/terms-of-service/BodyTermsOfService.module.css";
import Splitter from "../Splitter";

const BodyTermsOfService: React.FC = () => {
  return (
    <section className={styles.mainContainer}>
      <h1 className={styles.mainTitle}>MENTIONS LÉGALES</h1>
      <h3 className={styles.subTitle}>Mise à jour : 30 octobre 2024.</h3>
      <p className={styles.introduction}>
        {`Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
        la confiance en l'économie numérique, il est précisé aux utilisateurs du
        site EH Web l'identité des différents intervenants dans le cadre de sa
        réalisation et de son suivi.`}
      </p>
      <Splitter />

      <article className={styles.article}>
        <h2 className={styles.title}>Édition du site</h2>
        <p className={styles.paragraph}>
          {`Le présent site, accessible à l’URL www.ehweb.fr (le « Site »), est édité par Emilien Hainaux, résidant 6 rue Pasteur 62217 Achicourt, de nationalité Française (France), né(e) le 12/10/1982. (Numéro SIRET : 93372169800019).`}
        </p>
      </article>
      <Splitter />
      <article className={styles.article}>
        <h2 className={styles.title}>Hébergement</h2>
        <p className={styles.paragraph}>
          {`Le Site est hébergé par la société Hostinger International LTD, situé 61 Lordou Vironos Street, 6023 Larnaca, Cyprus. Contact téléphonique ou email : https://www.hostinger.fr/contact.`}
        </p>
      </article>
      <Splitter />
      <article className={styles.article}>
        <h2 className={styles.title}>Directeur de publication</h2>
        <p className={styles.paragraph}>
          {`Le Directeur de la publication du Site est Emilien Hainaux.`}
        </p>
      </article>
      <Splitter />

      <article className={styles.article}>
        <h2 className={styles.title}>Contact</h2>
        <div className={styles.multiLinesParagraph}>
          <p className={styles.paragraph}>{`Par téléphone : +33650828136`}</p>

          <p className={styles.paragraph}>{`Par email : contact@ehweb.fr`}</p>

          <p className={styles.paragraph}>
            {`Par courrier : 6 rue Pasteur 62217 Achicourt`}
          </p>
        </div>
      </article>
      <Splitter />
    </section>
  );
};

export default BodyTermsOfService;
