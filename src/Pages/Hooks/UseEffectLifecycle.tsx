import { useEffect, useState } from 'react';

type Props = {
  name: string;
}

export const LifecycleDemo = ({ name }: Props) => {
  // Set up a piece of state, so that we have
  // a way to trigger a re-render.  
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [random, setRandom] = useState(Math.random());

  // This gets called after every render (the first one, and every one after that)
  useEffect(() => {    
    console.log('[useEffect] on every render');

    // called prior to the component unmounting
    return () => console.log('[useEffect] unmounting...');
  });

  // This gets called on the first render
  useEffect(() => {    
    console.log('[useEffect] on first render');
  }, []);

  // This gets called on the first render and when prop 'name' changes
  useEffect(() => {    
    console.log('[useEffect] on first render and when prop name changes');
  }, [name]);

  return (
    <>
      <p>Lifecycle demo for: {name}</p>
      <button onClick={() => setRandom(Math.random())}>Re-render</button>
    </>
  );
}

const UseEffectLifecycle = () => {
  // Set up another piece of state to keep track of
  // whether the LifecycleDemo is shown or hidden
  const [mounted, setMounted] = useState(true);

  return (
    <>
      <button onClick={() => setMounted(!mounted)}>{mounted ? 'Hide' : 'Show'}</button>
      {mounted && <LifecycleDemo name='John' />}
    </>
  );
};

export default UseEffectLifecycle;