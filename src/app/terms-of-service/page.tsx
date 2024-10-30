"use client";
import React from "react";

import styles from "./page.module.css";
import BodyTermsOfService from "@/components/terms-of-service/BodyTermsOfService";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className={styles.page}>
      <BodyTermsOfService />
      <Footer />
    </div>
  );
}
