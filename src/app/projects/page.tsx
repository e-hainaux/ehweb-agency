"use client";
import React, { useState, useEffect } from "react";

import styles from "./page.module.css";
import NavBar from "@/components/NavBar";
import ProjectsWrapper from "@/components/projects/projectsWrapper";
import Splitter from "@/components/Splitter";
import Footer from "@/components/Footer";

export default function About() {
  const showHeaderLogo = true;
  const [isNavBarTransparent, setIsNavBarTransparent] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 10;

      setIsNavBarTransparent(scrollPosition <= threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.page}>
      <NavBar
        showLogo={showHeaderLogo}
        isNavBarTransparent={isNavBarTransparent}
      />
      <ProjectsWrapper isLoading={false} />
      <Splitter />
      <Footer />
    </div>
  );
}
