import { useEffect, useState } from "react";

export function UseEffectObjectPitfall() {
  const [item, setItem] = useState({ value: "", count: 0 });

  // count occurences of "a"
  useEffect(() => {
    const data: Array<string> = item.value.split('');
    const occurrences = data.reduce((a, v) => (v === "a" ? a + 1 : a), 0);
    if (data.length) {
      setItem({ ...item, count: occurrences });
    }
  }, [item]);
  // solution: use item.value as useEffect dependency

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setItem({ ...item, value: target.value });
  };

  return (
    <div>
      <h1>Count the letter "a"</h1>
      <input type="text" value={item.value} onChange={onChange} />
      <p>Number of occurences: {item.count}</p>
    </div>
  );
}
