import { useEffect, useState } from "react";

export default function EffectSimple() {
  const [count, setCount] = useState(0);

  // fires on first render and on every re-render
  useEffect(() => {
    console.log("useEffect fired.");
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}