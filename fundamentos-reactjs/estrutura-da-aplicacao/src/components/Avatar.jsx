import React from "react";

import styles from "./Avatar.module.css";

export function Avatar({ src, noBorder = false }) {
  return (
    <img
      className={
        noBorder ? styles.avatarWithoutBorder : styles.avatarWithBorder
      }
      src={src}
    />
  );
}
