import { Link } from "react-router-dom";

const UseEffectPage = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>useEffect Hook</h1>
    
      <p>
        <Link to="/hooks/use-effect/simple">simple useEffect (runs on every render/re-render)</Link>
      </p>
      <p>
        <Link to="/hooks/use-effect/first-render">useEffect for first render</Link>
      </p>
      <p>
        <Link to="/hooks/use-effect/dependency">useEffect with one dependency</Link>
      </p>
      <p>
        <Link to="/hooks/use-effect/async">Asynchronous useEffect</Link>
      </p>
      <p>
        <Link to="/hooks/use-effect/cleanup">useEffect with a cleanup function</Link>
      </p>
      <p>
        <Link to="/hooks/use-effect/pitfalls/dependency">useEffect dependency pitfall</Link>
      </p>      
      <p>
        <Link to="/hooks/use-effect/pitfalls/object">useEffect object pitfall</Link>
      </p>      
    </div>
  );
};

export default UseEffectPage;