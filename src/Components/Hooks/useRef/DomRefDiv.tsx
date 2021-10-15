import { useRef, useEffect } from 'react';

export const DomRefDiv = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const divElement = elementRef.current;
    console.log(divElement); // <div>I'm a DIV.</div>
  }, []);

  return (
    <div ref={elementRef}>
      I'm a DIV.
    </div>
  );
}
