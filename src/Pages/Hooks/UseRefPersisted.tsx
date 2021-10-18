import { useRef, useState } from 'react';

export const LogButtonClicks = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [counter, setCounter] = useState(0);

  const countRef = useRef(0);
  
  const handleClick = () => {
    // Updating a reference doesn’t trigger a component re-rendering.
    countRef.current++;
    // The value of the reference does not change even if we trigger a re-rendering. 
    setCounter(countRef.current);
    console.log(`Clicked ${countRef.current} times`);
  };

  console.log('Rendering/re-rendering...');
  
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <div>{countRef.current}</div>
    </>
  );
}

const UseRefPersisted = () => <LogButtonClicks />;

export default UseRefPersisted;