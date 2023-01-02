import React from "react";

import styles from "./Post.module.css";

export function Post({ author, content }) {
  return (
    <article className={styles.post}>
      <header>
        <div>
          <img src="https://github.com/Drb-Diego.png" />
          <div>
            <strong>Diego Ramos</strong>
            <p>Web Developer</p>
          </div>
        </div>

        <time dateTime={new Date()} title={new Date()}>
          {new Date().toLocaleDateString()}
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#"> 👉 jane.design/doctorcare #novoprojeto</a>
        </p>
        <p>
          <a href="#"> #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
