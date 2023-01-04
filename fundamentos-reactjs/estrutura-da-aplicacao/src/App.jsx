import { Post } from "./components/Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      name: "Diego Ramos",
      avatarUrl: "https://github.com/DiegoRamos-b.png",
      role: "Web Developer",
    },
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo eaque quidem saepe tempora voluptates magni architecto aperiam laudantium illo aut eius enim repudiandae, consequuntur deserunt alias voluptatum odio porro accusantium.",

    publisedAt: new Date("2022-12-31 20:00"),
  },

  {
    id: 2,
    author: {
      name: "Thiago Ramos",
      avatarUrl: "https://github.com/thiagodejesus.png",
      role: "Web Developer",
    },

    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, placeat. Illo soluta similique ex a et ipsam, dicta sequi at, nobis quis, obcaecati explicabo sed neque eum porro praesentium provident?",
    publisedAt: new Date("2023-01-1 12:00"),
  },

  {
    id: 3,
    author: {
      name: "Diego Ramos",
      avatarUrl: "https://github.com/DiegoRamos-b.png",
      role: "Web Developer",
    },
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo eaque quidem saepe tempora voluptates magni architecto aperiam laudantium illo aut eius enim repudiandae, consequuntur deserunt alias voluptatum odio porro accusantium.",

    publisedAt: new Date("2023-01-04 10:00"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(({ id, author, content, publisedAt }) => (
            <Post
              author={author}
              content={content}
              key={id}
              publisedAt={publisedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
