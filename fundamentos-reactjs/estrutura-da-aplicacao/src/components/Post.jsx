import React, { useState } from "react";

import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import styles from "./Post.module.css";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post({ author, content, publisedAt }) {
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  const publishedDateFormated = format(
    publisedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBr }
  );

  const publisedDateRelativeNow = formatDistanceToNow(publisedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  const handleCreateNewComment = (event) => {
    event.preventDefault();

    setAllComments([...allComments, comment]);
    setComment("");
  };

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

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentario"
          onChange={({ target }) => setComment(target.value)}
          value={comment}
        />
        <button>Publicar</button>
      </form>

      <div className={styles.commentList}>
        {allComments.length > 0 &&
          allComments.map((comment, index) => (
            <Comment key={index} content={comment} />
          ))}
      </div>
    </article>
  );
}
