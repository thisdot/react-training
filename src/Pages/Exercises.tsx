import { Link } from "react-router-dom";

const Exercises = () => {
  return (
    <div>
      <h1>Exercises</h1>
      
      <p>
        <Link to="exercises/components">Components</Link>
      </p> 
      <p>
        <Link to="exercises/use-state">useState</Link>
      </p> 
      <p>
        <Link to="exercises/use-reducer">useReducer</Link>
      </p> 
      <p>
        <Link to="exercises/use-effect">useEffect</Link>
      </p> 
      <p>
        <Link to="exercises/custom-hook">Custom Hook</Link>
      </p>   
      <p>
        <Link to="exercises/events">Events</Link>
      </p>
      <p>
        <Link to="exercises/component-architecture">Component Architecture</Link>
      </p>
      <p>
        <Link to="exercises/lazy-loading">Component Lazy Loading</Link>
      </p>   
      <p>
        <Link to="exercises/routing">Routing</Link>
      </p> 
      <p>
        <Link to="exercises/context">Context</Link>
      </p> 
      <p>
        <Link to="exercises/redux">Redux</Link>
      </p> 
      <p>
        <Link to="exercises/testing">Testing</Link>
      </p> 
    </div>
  );
}

export default Exercises;
