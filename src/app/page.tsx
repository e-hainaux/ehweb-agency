"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  const [isFirstScreenLogoVisible, setIsFirstScreenLogoVisible] =
    useState(true);
  const [showHeaderLogo, setShowHeaderLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100;

      setShowHeaderLogo(scrollPosition > threshold);
      setIsFirstScreenLogoVisible(scrollPosition <= threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.page}>
      <Header
        showHeaderLogo={showHeaderLogo}
        isFirstScreenLogoVisible={isFirstScreenLogoVisible}
      />
      <Body />
      <Footer />
    </div>
  );
}
