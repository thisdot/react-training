import { useEffect, useState } from 'react';

type Props = {
  someProp: string;
}

// multiple useEffect for separate effects
export const EffectSetup = ({ someProp }: Props) => {
  const [someState, setSomestate] = useState();
    
  useEffect(() => {
    // Runs after EVERY render
  });

  useEffect(() => {
    // Runs ONCE after first render
  }, []);

  useEffect(() => {
    // Runs ONCE after first render
    // and after every render IF `someProp` or `someState` changes
  }, [someProp, someState]);

  return (
    <>
    </>
  );
}
