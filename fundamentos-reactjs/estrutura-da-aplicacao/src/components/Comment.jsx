import React from "react";

import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/Drb-Diego.png" />
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
              <Trash size={25} />
            </button>
          </header>

          <p>Muito bom parabens</p>
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
