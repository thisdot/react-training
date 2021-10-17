import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <p>
        <Link to="/users">Find a user</Link>
      </p>
    </main>
  );
}

export default Home;
