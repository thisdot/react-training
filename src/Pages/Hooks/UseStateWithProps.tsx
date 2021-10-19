import { useEffect, useState } from 'react';

// the component re-renders when the value prop changes
// so a regular variable rather than useState is fine here
const ValueDisplay = ({ value }: any) => {
  const valueToDisplay = value;

  // you could apply logic to valueToDisplay...  

  useEffect(() => {
    console.log(`[ValueDisplay] render with value ${valueToDisplay}`);
  });

  return (
    <p>{valueToDisplay}</p>
  );
}

// Once value is defined in useState, the default value will never change
// this is because useState is only called once here
// even if the value prop changes, the val state will never change
const ValueDisplayState = ({ value }: any) => {
  const [id, setId] = useState(value);
  
  // the component will re-render twice
  // one re-render for the prop change
  // and one re-render triggered by the setId(value) state change
  useEffect(() => {
    console.log(`[ValueDisplayState] render with value ${value}`);
  });

  // to correct the issue of keeping the state in sync with the prop
  // useEffect(() => {
  //   setId(value);
  // }, [value]);

  return (
    <p>{id}</p>
  );
}

const UseStateWithProps = () => {
  const [val, setVal] = useState(0);

  return (
    <>      
      <ValueDisplay value={val} />
      <ValueDisplayState value={val} />
      <button onClick={() => setVal(Math.random())}>Change Value</button>
    </>
  );
};

export default UseStateWithProps;

/*
Lesson:
- If data is being derived from props, it's recommended to use local variables
  instead of keeping data in state.
- The component will re-render on prop change anyway so the view will be in sync 
  with the latest prop data.
- Putting the prop in the state would cause an unnecessary re-render,
  first on the prop change, then on the state change.
*/
