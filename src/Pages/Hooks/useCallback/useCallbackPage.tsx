import { Link } from "react-router-dom";

export const UseCallbackPage = () => {
  return (
    <div>
      <h1>useCallback</h1>

      <p>
        <Link to="/hooks/use-callback/problem">useCallback - the problem it solves</Link>
      </p>      
      <p>
        <Link to="/hooks/use-callback/solution">useCallback - the solution</Link>
      </p> 
    </div>
  );
};
