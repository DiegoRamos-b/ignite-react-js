import React, { useState } from "react";

import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import styles from "./Post.module.css";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post({ author, content, publisedAt }) {
  const [allComments, setAllComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");

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

    setAllComments([...allComments, newCommentText]);
    setNewCommentText("");
  };

  const handleDeleteComment = (content) => {
    const filteredComments = allComments.filter(
      (comment) => comment !== content
    );

    setAllComments(filteredComments);
  };

  const isNewCommentEmpty = !newCommentText ? true : false;

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
          onChange={(event) => {
            event.target.setCustomValidity("");
            setNewCommentText(event.target.value);
          }}
          value={newCommentText}
          required
          onInvalid={() =>
            event.target.setCustomValidity("Este campo é obrigatorio")
          }
        />
        <button disabled={isNewCommentEmpty}>Publicar</button>
      </form>

      <div className={styles.commentList}>
        {allComments.map((comment, index) => (
          <Comment
            key={index}
            content={comment}
            deleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </article>
  );
}
