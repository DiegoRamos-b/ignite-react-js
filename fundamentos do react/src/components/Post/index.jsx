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

          <div className={styles.authorInfo}>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa
        </p>
        <p>
          numquam saepe amet aperiam possimus atque quidem dolore ea molestias
        </p>
        <p>
          <a href="https://github.com/Drb-Diego" target="_blank">
            soluta provident dolores culpa unde! Tempore quo a nisi aut!
          </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentario" />
        <button type="submit">Comentar</button>
      </form>
    </article>
  );
}
