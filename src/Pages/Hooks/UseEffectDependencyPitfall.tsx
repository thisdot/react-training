import { useEffect, useState } from 'react';

// count increases to infinity
// even without having input any text

export const Counter = () => {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(-1);

  // this gets called after every render
  // and set count updates the state, triggering a re-render
  // thus, an infinite loop
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => setCount(count + 1));

  // solution  
  // useEffect(() => setCount(count + 1), [value]);

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };
  
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <div>{count} changes.</div>
    </div>
  );
}

const UseEffectDependencyPitfall = () => <Counter />;

export default UseEffectDependencyPitfall;