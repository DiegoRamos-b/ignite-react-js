import { Post } from "./Post";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Post
        author="Diego Ramos"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam eum cumque suscipit numquam. Commodi, molestias odit consequuntur ipsam quia dicta recusandae maxime velit ducimus suscipit dolorum facere, nam sunt veniam!"
      />

      <Post
        author="Tatiana Ramos"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam eum cumque suscipit numquam. Commodi, molestias odit consequuntur ipsam quia dicta recusandae maxime velit ducimus suscipit dolorum facere, nam sunt veniam!"
      />
    </>
  );
}

export default App;
