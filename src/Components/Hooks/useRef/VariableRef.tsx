import { useRef } from 'react';

export const LogButtonClicks = () => {
  const countRef = useRef(0);
  
  const handleClick = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };
  
  return <button onClick={handleClick}>Click me</button>;
}
