"use client";
import React, { useState, useEffect } from "react";
import useImagePreloader from "@/app/hooks/useImagePreloader";
import imageUrls from "./data/imageUrls";

import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import LoadingProgress from "@/components/LoadingProgress";

export default function Home() {
  const { isLoading, loadingProgress, isTransitioning } =
    useImagePreloader(imageUrls);

  const [isFirstScreenLogoVisible, setIsFirstScreenLogoVisible] =
    useState(true);
  const [showHeaderLogo, setShowHeaderLogo] = useState(false);
  const [isNavBarTransparent, setIsNavBarTransparent] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 10;

      setShowHeaderLogo(scrollPosition > threshold);
      setIsFirstScreenLogoVisible(scrollPosition <= threshold);
      setIsNavBarTransparent(scrollPosition <= threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
    return (
      <LoadingProgress
        progress={loadingProgress}
        isTransitioning={isTransitioning}
      />
    );
  }

  return (
    <div className={styles.page}>
      <Header
        showHeaderLogo={showHeaderLogo}
        isFirstScreenLogoVisible={isFirstScreenLogoVisible}
        isNavBarTransparent={isNavBarTransparent}
      />
      <Body />
      <Footer />
    </div>
  );
}
