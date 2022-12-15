import React from "react";
import { Post } from "./Post";

export function App() {
  return (
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
  );
}
