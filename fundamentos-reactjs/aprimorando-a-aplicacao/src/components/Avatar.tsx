import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  noBorder?: boolean;
}

export function Avatar({ src, noBorder = false, ...props }: IAvatarProps) {
  return (
    <img
      className={
        noBorder ? styles.avatarWithoutBorder : styles.avatarWithBorder
      }
      src={src}
      {...props}
    />
  );
}
