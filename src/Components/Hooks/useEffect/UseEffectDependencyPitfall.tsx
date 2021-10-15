import { useEffect, useState } from 'react';

export const UseEffectDependencyPitfall = () => {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(-1);

  // count state variable increases to infinity
  // even without having input any text

  // eslint-disable-next-line
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