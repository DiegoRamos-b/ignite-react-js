import React from "react";

import logo from "../assets/ignite-feed.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.contentContainer}>
        <img src={logo} alt="Logo ignite feed" />
        <strong>Ignite Feed</strong>
      </div>
    </header>
  );
}
