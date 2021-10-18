import { useEffect, useState } from "react";

// without clearInterval, a new interval would start every second, creating multiple intervals
// running at the same time.

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      console.log(count);
      // triggers a component re-render      
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // what happens if we don't include a cleanup function?
    return () => clearInterval(key);
  }, [count]);

  return <span>{count}</span>;
};

const UseEffectCounter = () => {
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      {isShown && <Counter />}
      <button onClick={() => setIsShown((prev) => !prev)}>{isShown ? 'Hide' : 'Show'}</button>
    </>
  );
};

export default UseEffectCounter;
