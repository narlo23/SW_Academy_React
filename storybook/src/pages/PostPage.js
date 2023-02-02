import axios from "axios";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Spinner, Header, Text } from "../components";
import { useAsync } from "../hooks";
const PostPage = () => {
  const { postId } = useParams();
  console.log(postId);
  const post = useAsync(async () => {
    return await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.data);
  }, [postId]);

  return (
    <div>
      {post.isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Header strong>{post.value?.title}</Header>
          <Text>{post.value?.body}</Text>
        </Fragment>
      )}
    </div>
  );
};
export default PostPage;
