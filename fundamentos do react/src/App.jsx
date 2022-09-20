import { Header } from './components/Header';
import { Post } from './Post';

function App() {
  return (
    <div>
      <Header />
      <Post
        author='Diego Ramos'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates non totam esse, sint nesciunt quos quo modi consequuntur at voluptatibus beatae, nulla aspernatur vitae explicabo quae! Commodi, porro fugiat.'
      />
      <Post
        author='Tatiana Ramos'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates non totam esse, sint nesciunt quos quo modi consequuntur at voluptatibus beatae, nulla aspernatur vitae explicabo quae! Commodi, porro fugiat.'
      />
    </div>
  );
}

export default App;
