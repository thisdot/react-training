import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../../Store/actions/postActions";
import { AppState } from "../../Store/types";
import { Post } from "../../Store/types/postTypes";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(({ postReducer }: AppState) => postReducer.posts);
  
  return (
    <div>
      <h1>Posts</h1>
      <p>
        <Link to="/redux/posts/create">Create Post</Link>
      </p>
      {posts.length > 0 && 
        <ul>
          {posts.map((post: Post) => (
            <li key={post.id}>
              <Link to={`/redux/posts/${post.id}`}>
                {post.title}
              </Link>
              <button onClick={() => dispatch(deletePost(post))}>X</button>
            </li>
          ))}
        </ul>
      }
      {posts.length === 0 && 
        <p>No posts.</p>
      }
    </div>
  );
};

export default Posts;