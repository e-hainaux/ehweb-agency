"use client";
import React from "react";
import styles from "@/styles/Header.module.css";
import NavBar from "./NavBar";
import FirstScreen from "./FirstScreen";

interface HeaderProps {
  showHeaderLogo: boolean;
  isFirstScreenLogoVisible: boolean;
}

export default function Header({
  showHeaderLogo,
  isFirstScreenLogoVisible,
}: HeaderProps) {
  return (
    <header className={styles.mainContainer}>
      <NavBar showLogo={showHeaderLogo} />
      <FirstScreen isLogoVisible={isFirstScreenLogoVisible} />
    </header>
  );
}
