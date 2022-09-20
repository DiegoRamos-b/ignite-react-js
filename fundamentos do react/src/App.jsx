import React from "react";

import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Ramos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quisquam eligendi veniam placeat nam, fugit neque, quia culpa cupiditate excepturi error architecto repellendus facere debitis iure rem cum autem! Culpa."
          />
          <Post
            author="Tatiana Ramos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quisquam eligendi veniam placeat nam, fugit neque, quia culpa cupiditate excepturi error architecto repellendus facere debitis iure rem cum autem! Culpa."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
