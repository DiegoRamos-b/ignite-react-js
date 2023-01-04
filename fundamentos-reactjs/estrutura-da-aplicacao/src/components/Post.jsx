import React from "react";

import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import styles from "./Post.module.css";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post({ author, content, publisedAt }) {
  const publishedDateFormated = format(
    publisedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBr }
  );

  const publisedDateRelativeNow = formatDistanceToNow(publisedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <p>{author.role}</p>
          </div>
        </div>

        <time dateTime={publisedAt.toISOString()} title={publishedDateFormated}>
          {publisedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>{content}</p>
        <p>
          <a href="#"> jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>
          <a href="#"> #nlw</a>
          <a href="#"> #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentario" />
        <button>Publicar</button>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
