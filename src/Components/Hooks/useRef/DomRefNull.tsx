import { useRef, useEffect } from 'react';

export const DomRefNull = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Logs `HTMLInputElement` 
    console.log(`[input] ref is ${inputRef.current} within useEffect`);
    inputRef?.current?.focus();
  }, []);
  
  // Logs `undefined` during initial rendering
  console.log(`[input] ref is ${inputRef.current} during initial render (outside of the useEffect for first render)`);
  
  return <input ref={inputRef} type="text" />;
}