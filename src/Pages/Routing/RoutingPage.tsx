import { Link } from 'react-router-dom';

const RoutingPage = () => {
  return (
    <main>
      <h1>Routing</h1>

      <h3>Standard Routing</h3>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/users">Users</Link>
      </p>
      <p>
        <Link to="/users?sort=firstName">Users</Link> (with search param)
      </p>
      <p>
        <Link
          to={{
            pathname: "/users",
            search: "?sort=lastName",
            state: { fromDashboard: true }
          }}>
          Users 
        </Link> (with search and state params)
      </p>
      <p>
        <Link to="/users/1">User</Link> (with id param)
      </p>
      <p>
        <Link to="/users/1/1">User</Link> (with id and page params)
      </p>

      <h3>Nested Routing</h3>
      <p>
        <Link to="/routing/categories">Categories</Link>
      </p>

      <h3>Lazy Routing</h3>
      <p>
        <Link to="/routing/lazy">Categories</Link>
      </p>
    </main>
  );
}

export default RoutingPage;