import React from "react";

import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Drb-Diego.png"
          />

          <div>
            <strong>Diego Brito</strong>
            <span>Dev FullStack</span>
          </div>
        </div>

        <time title="11 de maio as 12:13h" dateTime="2022-05-11 12:13">
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa,
          numquam saepe amet aperiam possimus atque quidem dolore ea molestias
          soluta provident dolores culpa unde! Tempore quo a nisi aut!
        </p>
      </div>
    </article>
  );
}
