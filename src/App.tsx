import { useState } from "react";
import { elementSeam } from "./test";
import { Element } from "./components";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    setIsLoading(true);
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => setPosts(posts as Post[]));

    setIsLoading(false);
  };

  return (
    <main className="App">
      <h1>MSW Testing Library Example</h1>
      {isLoading && <span aria-label="loading">Loading...</span>}
      {posts.length > 0 &&
        posts.map(post => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      <button onClick={() => fetchPosts()}>Fetch Posts</button>
      <Element {...elementSeam} />
    </main>
  );
};
