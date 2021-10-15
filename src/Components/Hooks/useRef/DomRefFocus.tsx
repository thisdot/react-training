import { useRef, useEffect } from 'react';

export const DomRefFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <input ref={inputRef} type="text" />
  );
}
