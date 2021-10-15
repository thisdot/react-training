import { useEffect } from 'react';

type Props = {
  name: string;
}

export const EffectCleanup = ({ name }: Props) => {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(`Hello, ${name} (greeting prints every 2 seconds)`);
    }, 2000);
    
    // cancel the previous timer when starting a new one
    return () => clearInterval(id);
  }, [name]);

  return <p>Hello, {name}</p>;
}
