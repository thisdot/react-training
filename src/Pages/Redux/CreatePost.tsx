import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../Store/actions/postActions";
import { Post } from "../../Store/types/postTypes";
import { Link, useHistory } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState<string>('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const post: Post = { title };
    dispatch(addPost(post));

    history.push('/redux/posts');
  }

  return (
    <div>
      <header>
        <h1>New Post</h1>
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

export default CreatePost;