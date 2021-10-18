import { useRef, useEffect } from 'react';

export const UserForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('[useEffect] inputRef is', inputRef.current);
    inputRef?.current?.focus();
  }, []);
  
  // inputRef.current evaluates to null during initial rendering.
  // during initial rendering, there is no DOM structure created yet. 
  // the useEffect hook is the right place to access reference values because the DOM is constructed by then.
  console.log('inputRef is', inputRef.current);

  return (
    <div>
      <label htmlFor="username">Username</label>
      <input id="username" ref={inputRef} type="text" />
    </div>
  );
}

const UseRefInput = () => <UserForm />;

export default UseRefInput;