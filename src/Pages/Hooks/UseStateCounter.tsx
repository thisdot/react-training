import { useState } from 'react';

// count changes when clicked but only when you use useState 
// will the component re-render to show count's current value
const NoStateCounter = () => {
  // note: local variables get reset on each render, usestate variables do not
  let count = 0;

  const onClick = () => {
    count += 1;
    console.log(`[NoStateCounter] count is ${count}`);
  }

  return (
    <div>
      <p>{count} clicks.</p>
      <button onClick={onClick}>
        Click
      </button>
    </div>
  );
}

const StateCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count} clicks.</p>
      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
      {/* to avoid capturing a stale value of the state
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Click
      </button> */}
    </div>
  );
}

const UseStateCounter = () => (
  <>
    <h3>Without useState</h3>
    <NoStateCounter />
    <h3>With useState</h3>
    <StateCounter />
  </>
);

export default UseStateCounter;