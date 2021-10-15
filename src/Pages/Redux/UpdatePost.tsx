import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { updatePost } from "../../Store/actions/postActions";
import { AppState } from "../../Store/types";
import { Post } from "../../Store/types/postTypes";

const UpdatePost = () => {
  const { id } = useParams<{ id: string; }>();
  const postId = parseInt(id);
  const post: Post | undefined = useSelector(({ postReducer }: AppState) => {
    return postReducer.posts.find(p => p.id === postId);
  });
  const [title, setTitle] = useState<string>(post?.title || '');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const post: Post = { id: postId, title };
    dispatch(updatePost(post));

    history.push('/redux/posts');
  }

  return (
    <div>
      <header>
        <h1>Update Post</h1>
        <p>
          <Link to="/redux/posts">Back to Posts</Link>
        </p>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit">Save Post</button>
      </form>
    </div>
  );
}

export default UpdatePost;