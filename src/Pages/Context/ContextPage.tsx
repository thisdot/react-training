import { Link } from "react-router-dom";

const ContextPage = () => {
  return (
    <div>
      <h1>Context</h1>
      <p>
        <Link to="/context/usestate">Context with useState</Link>
      </p>
      <p>
        <Link to="/context/rerender-pitfall">Context re-render pitfall</Link>
      </p>
    </div>
  );
}

export default ContextPage;
