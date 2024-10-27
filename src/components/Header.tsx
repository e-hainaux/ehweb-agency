"use client";
import React from "react";
import styles from "@/styles/Header.module.css";
import NavBar from "./NavBar";

interface HeaderProps {
  showHeaderLogo: boolean;
  isNavBarTransparent: boolean;
}

export default function Header({
  showHeaderLogo,
  isNavBarTransparent,
}: HeaderProps) {
  return (
    <header className={styles.mainContainer}>
      <NavBar
        showLogo={showHeaderLogo}
        isNavBarTransparent={isNavBarTransparent}
      />
    </header>
  );
}
