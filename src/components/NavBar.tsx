import React, { useState, useEffect } from "react";
import styles from "@/styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

interface NavBarProps {
  showLogo: boolean;
  isNavBarTransparent: boolean;
}

export default function NavBar({ showLogo, isNavBarTransparent }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
      if (window.innerWidth > 700) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const navBarStyle =
    isNavBarTransparent && !isMenuOpen
      ? styles.transparent
      : styles.blurryOpacity;

  return (
    <nav
      className={`${styles.mainContainer} ${navBarStyle} ${
        isMenuOpen ? styles.expanded : ""
      }`}
    >
      <div className={styles.navContent}>
        <div className={styles.leftGroup}>
          <Link
            href="/"
            className={`${styles.link} ${styles.homeLink}`}
            onClick={handleLinkClick}
          >
            Accueil
          </Link>
        </div>
        <div className={styles.logoContainer}>
          <Image
            src="/images/NewEhWebLogo.svg"
            alt="Header Logo"
            width={80}
            height={80}
            className={`${styles.logo} ${showLogo ? styles.show : styles.hide}`}
          />
        </div>
        {isMobile && (
          <button className={styles.menuButton} onClick={toggleMenu}>
            <FaBars size={24} />
          </button>
        )}
        <div
          className={`${styles.rightGroup} ${
            isMobile && isMenuOpen ? styles.mobileMenu : ""
          }`}
        >
          <Link
            href="/"
            className={`${styles.link} ${styles.homeLink} ${styles.hideOnDesktop}`}
            onClick={handleLinkClick}
          >
            Accueil
          </Link>
          <Link href="/about" className={styles.link} onClick={handleLinkClick}>
            À propos
          </Link>
          <Link
            href="/projects"
            className={styles.link}
            onClick={handleLinkClick}
          >
            Réalisations
          </Link>
          <Link
            href="/contact"
            className={styles.link}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
