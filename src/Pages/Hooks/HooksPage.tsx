import { Link } from "react-router-dom";
import { CounterReducer } from "../../Components/Hooks/useReducer/CounterReducer";
import { StateCounter } from "../../Components/Hooks/useState/StateCounter";

const HooksPage = () => {
  const style = { border: '1px solid #ccc', padding: '1rem' };  
  const h2Style = { background: '#333', padding: '1rem', color: '#fff' };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Hooks</h1>

      <h2 style={h2Style}>useState</h2>
      <div style={style}>
        <StateCounter />
      </div>

      <h2 style={h2Style}>useReducer</h2>
      <div style={style}>
        <CounterReducer />
      </div>

      <h2 style={h2Style}>useEffect</h2>
      <p>
        <Link to="/hooks/use-effect">useEffect</Link>
      </p>

      <h2 style={h2Style}>useCallback</h2>
      <p>
        <Link to="/hooks/use-callback">useCallback</Link>
      </p>

      <h2 style={h2Style}>useRef</h2>
      <p>
        <Link to="/hooks/use-ref">useRef</Link>
      </p>

      <h2 style={h2Style}>useMemo</h2>
      <p>
        <Link to="/hooks/use-memo">useMemo</Link>
      </p>

      <h2 style={h2Style}>Custom Hooks</h2>
      <p>
        <Link to="/hooks/custom-hooks">Custom Hooks</Link>
      </p>
    </div>
  );
};

export default HooksPage;