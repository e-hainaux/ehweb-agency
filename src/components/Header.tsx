"use client";
import React from "react";
import styles from "@/styles/Header.module.css";
import NavBar from "./NavBar";
import FirstScreen from "./FirstScreen";

interface HeaderProps {
  showHeaderLogo: boolean;
  isFirstScreenLogoVisible: boolean;
  isNavBarTransparent: boolean;
}

export default function Header({
  showHeaderLogo,
  isFirstScreenLogoVisible,
  isNavBarTransparent,
}: HeaderProps) {
  return (
    <header className={styles.mainContainer}>
      <NavBar
        showLogo={showHeaderLogo}
        isNavBarTransparent={isNavBarTransparent}
      />
      <FirstScreen isLogoVisible={isFirstScreenLogoVisible} />
    </header>
  );
}
