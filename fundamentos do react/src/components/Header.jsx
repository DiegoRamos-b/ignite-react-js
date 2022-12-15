import React from "react";

import igniteLogo from "../assets/ignite-logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo ignite feed" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
