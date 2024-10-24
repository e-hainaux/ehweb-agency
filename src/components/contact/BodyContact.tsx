import React from "react";
import styles from "@/styles/contact/BodyContact.module.css";
import Splitter from "../Splitter";
import ProtectedContact from "./ProtectedContact";
import { emailParts, phoneParts } from "@/app/data/contactData";

const BodyContact: React.FC = () => {
  const email = `${emailParts.localPart}@${emailParts.domainPart}`;

  const phone = `${phoneParts.part1} ${phoneParts.part2} ${phoneParts.part3}`;
  return (
    <section className={styles.mainContainer}>
      <span className={styles.title}>Contact</span>
      <Splitter />
      <ProtectedContact email={email} phone={phone} />
      <Splitter />
    </section>
  );
};

export default BodyContact;
