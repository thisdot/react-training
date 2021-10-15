import { useEffect, useState } from "react";

export default function EffectFirstRender() {
  const [count, setCount] = useState(0);

  // fires on first render
  useEffect(() => {
    document.title = `First Render`;
    console.log("useEffect fired.");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}