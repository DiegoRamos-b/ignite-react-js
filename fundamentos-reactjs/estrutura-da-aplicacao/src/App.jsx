import { Post } from "./components/Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Ramos"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam eum cumque suscipit numquam. Commodi, molestias odit consequuntur ipsam quia dicta recusandae maxime velit ducimus suscipit dolorum facere, nam sunt veniam!"
          />

          <Post
            author="Tatiana Ramos"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam eum cumque suscipit numquam. Commodi, molestias odit consequuntur ipsam quia dicta recusandae maxime velit ducimus suscipit dolorum facere, nam sunt veniam!"
          />
        </main>
      </div>
    </>
  );
}

export default App;
