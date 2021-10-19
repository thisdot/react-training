import { useEffect, useState } from "react";

// Avoid using objects as useEffect dependencies.
// Use only a specific property of an object (Ex: item.value)

export function LetterCounter() {
  const [item, setItem] = useState({ value: "", count: -1 });

  useEffect(() => {
    // this line creates a new object
    // two objects in JavaScript are equal only if they reference exactly the same object
    setItem(prevItem => ({ ...prevItem, count: prevItem.count + 1 }));
  }, [item]);
  // solution: use item.value as useEffect dependency

  // when a new 'item' object is created, useEffect detects that its dependency has changed
  // the side-effect function is invoked again and calls setItem which creates an infinte loop
  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setItem({ ...item, value: target.value });
  };

  return (
    <div>
      <input type="text" value={item.value} onChange={onChange} />
      <p>{item.count} changes.</p>
    </div>
  );
}

const UseEffectObjectPitfall = () => <LetterCounter />;

export default UseEffectObjectPitfall;