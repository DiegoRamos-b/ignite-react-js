import React from "react";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

export function App() {
  return (
    <>
      <Header />

      <div>
        <Post
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem nemo at vero quo, nobis sed cum"
          author="Diego Ramos"
        />
        <Post
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem nemo at vero quo, nobis sed cum"
          author="Tatiana Ramos"
        />
      </div>
    </>
  );
}
