import { useCallback } from 'react';

type Props = {
  someProp: string;
}

export const CallbackSetup = ({ someProp } : Props) => {
  const myCallbackFunction = () => {};

  // execute the function when dependencies change
  useCallback(() => {
    myCallbackFunction();
   }, [someProp]);

   // execute the function only once
   useCallback(() => {
    myCallbackFunction();
   }, []);

  // ...
}
