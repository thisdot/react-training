import { Link } from "react-router-dom";

const ReduxPage = () => {
  return (
    <div>
      <h1>Redux</h1>
      <p><Link to="/redux/posts">Posts</Link></p>
    </div>
  );
}

export default ReduxPage;
