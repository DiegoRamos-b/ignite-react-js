import React, { useState } from "react";

import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "./Avatar";

export function Comment({ content, deleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeComment = () => setLikeCount(likeCount + 1);

  const handleClickDeleteComment = () => deleteComment(content);

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/DiegoRamos-b.png" noBorder={true} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Ramos</strong>
              <time dateTime={new Date()} title={new Date()}>
                {new Date().toLocaleDateString()}
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={25} onClick={handleClickDeleteComment} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Apalaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
