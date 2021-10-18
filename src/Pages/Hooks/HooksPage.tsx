import { Link } from "react-router-dom";

const HooksPage = () => {
  return (
    <div> 
      <p><Link to="/hooks/use-state/counter">useState</Link></p>
      <p><Link to="/hooks/use-state/props">useState with props</Link></p>
      <p><Link to="/hooks/use-effect/lifecycle">useEffect Lifecycle</Link></p>
      <p><Link to="/hooks/use-effect/counter">useEffect Counter</Link></p>
      <p><Link to="/hooks/use-effect/pitfalls/dependency">useEffect Dependency Pitfall</Link></p>
      <p><Link to="/hooks/use-effect/pitfalls/object">useEffect Object Pitfall</Link></p>
      <p><Link to="/hooks/use-ref/input">useRef input</Link></p>
      <p><Link to="/hooks/use-ref/persisted">useRef persisted</Link></p>
      <p><Link to="/hooks/custom-hook">Custom Hook</Link></p>
    </div>
  );
};

export default HooksPage;