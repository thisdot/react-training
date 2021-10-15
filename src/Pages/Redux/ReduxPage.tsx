import { Link } from "react-router-dom";

const ReduxPage = () => {
  return (
    <div>
      <h1>Redux</h1>
      <ul>
        <li>
          <Link to="/redux/posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
}

export default ReduxPage;
