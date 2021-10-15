import { useCallback } from 'react';

export const CallbackBadUseCase = () => {
  const handleClick = useCallback(() => {
    // handle the click event
  }, []);
  
  return <ChildComponent onClick={handleClick} />;
}

// re-renderings of this lightweight component 
// won't create performance issues
const ChildComponent = ({ onClick }: any) => {
  return <button onClick={onClick}>I am a child</button>;
}
