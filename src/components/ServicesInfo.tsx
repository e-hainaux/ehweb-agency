import React from "react";
import styles from "@/styles/ServicesInfo.module.css";
import Image from "next/image";
import { servicesInfo } from "@/app/data/servicesData";
import Splitter from "./Splitter";

export default function ServicesInfo() {
  return (
    <div className={styles.mainContainer}>
      {servicesInfo.map((service) => (
        <div
          key={service.id}
          className={`${styles.serviceContainer} ${
            service.id % 2 === 0 ? styles.reverse : ""
          }`}
        >
          <div className={styles.imageContainer}>
            <Image
              src={service.imageUrl}
              alt={service.title}
              width={681}
              height={419}
              quality={100}
              className={styles.picto}
            />
          </div>
          <div className={styles.voidContainer}></div>
          <div className={styles.textContainer}>
            <div className={styles.textWrapper}>
              <h2 className={styles.title}>{service.title}</h2>
              <p className={styles.paragraph}>
                {Array.isArray(service.paragraph)
                  ? service.paragraph.map((text, index) => (
                      <span key={index}>
                        {text}
                        <br />
                      </span>
                    ))
                  : service.paragraph}
              </p>
            </div>
          </div>
        </div>
      ))}
      <Splitter />
    </div>
  );
}
