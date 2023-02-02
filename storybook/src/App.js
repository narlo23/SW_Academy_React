import { Routes, Route } from "react-router";
import { PostsPage, PostPage, NotFoundPage } from "./pages";
import DefaultTemplate from "./components/template/DefaultTemplate";

const App = () => {
  return (
    <DefaultTemplate>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} exact></Route>
        <Route path="/posts" element={<PostsPage />} exact></Route>
        <Route path="/posts/:postId" element={<PostPage />} exact></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </DefaultTemplate>
  );
};
export default App;
