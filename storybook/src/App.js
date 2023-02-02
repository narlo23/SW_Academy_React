import axios from "axios";
import { useCallback } from "react";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import useAsync from "./hooks/useAsync";

const App = () => {
  const initialPosts = useAsync(async () => {
    return await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.data);
  }, []);

  const handleAddPost = useCallback(async (post) => {
    return await axios
      .post(`https://jsonplaceholder.typicode.com/posts`, post)
      .then((response) => response.data);
  }, []);

  const handleDeletePost = useCallback(async (id) => {
    return await axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => ({ id }));
  }, []);

  return (
    <div>
      <Header>Posts</Header>
      <ul>
        {initialPosts.isLoading ? (
          <Spinner />
        ) : (
          (initialPosts.value || []).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
