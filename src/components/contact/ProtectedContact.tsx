import React, { useState } from "react";
import { MdMail, MdPhone } from "react-icons/md";
import styles from "@/styles/contact/ProtectedContact.module.css";
import OtherContacts from "./OtherContacts";

interface ContactInfo {
  email: string;
  phone: string;
}

const ProtectedContact: React.FC<ContactInfo> = ({ email, phone }) => {
  const [showEmail, setShowEmail] = useState<boolean>(false);
  const [showPhone, setShowPhone] = useState<boolean>(false);

  const decodeEmail = (): void => {
    setShowEmail(true);
  };

  const decodePhone = (): void => {
    setShowPhone(true);
  };

  return (
    <div className={styles.mainContainer}>
      <OtherContacts />
      <div className={styles.contactList}>
        <div className={styles.contactItem}>
          <MdMail className={styles.icon} />
          {showEmail ? (
            <span className={styles.contactInfo}>{email}</span>
          ) : (
            <button onClick={decodeEmail} className={styles.button}>
              Afficher l&apos;email
            </button>
          )}
        </div>

        <div className={styles.contactItem}>
          <MdPhone className={styles.icon} />
          {showPhone ? (
            <span className={styles.contactInfo}>{phone}</span>
          ) : (
            <button onClick={decodePhone} className={styles.button}>
              Afficher le numéro
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProtectedContact;
