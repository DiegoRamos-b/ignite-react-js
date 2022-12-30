import React from "react";

export function Post({ author, content }) {
  return (
    <div>
      <h1>{author}</h1>
      <p>{content}</p>
    </div>
  );
}
