import { useState } from 'react';

export const StateCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count} clicks.</p>
      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  );
}
