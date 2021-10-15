import { useEffect } from 'react';

type Props = {
  name: string;
};

export const EffectDependency = ({ name }: Props) => {
  const message = `Hello, ${name}!`;

  useEffect(() => {
    document.title = `Greetings, ${name}`;
    console.log(`useEffect received ${name}`); 
  }, [name]);

  return <div>{message}</div>;
}

/*
// First render
<Greeting name="John" /> // Side-effect RUNS
// Second render, name prop changes
<Greeting name="Bob" />  // Side-effect RUNS
// Third render, name prop doesn't change
<Greeting name="Bob" /> // Side-effect DOES NOT RUN
// Fourth render, name prop changes
<Greeting name="Smith"/> // Side-effect RUNS
*/