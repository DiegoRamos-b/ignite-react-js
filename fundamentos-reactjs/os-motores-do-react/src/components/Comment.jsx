import React from "react";

import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "./Avatar";

export function Comment({ content, deleteComment }) {
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
              <Trash size={25} onClick={() => deleteComment(content)} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Apalaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
