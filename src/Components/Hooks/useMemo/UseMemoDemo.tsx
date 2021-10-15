import { useState, useMemo } from "react";

export default function UseMemoDemo() {
  const [count, setCount] = useState(0);
  // State to keep track of current word in array we want to show
  const [wordIndex, setWordIndex] = useState(0);
  // Words we can flip through and view letter count
  const words = ["hey", "this", "is", "cool"];
  const word = words[wordIndex];
  
  // Returns number of letters in a word
  // make it slow by including a large loop
  const computeLetterCount = (word: string) => {
    console.log('computing letter count...');
    let i = 0;
    while (i < 1000000000) i++;
    console.log('computed letter count');
    return word.length;
  };

  // Memoize computeLetterCount so it uses the cached return value 
  // if [word] value is the same as last time the function was run
  const letterCount = useMemo(() => computeLetterCount(word), [word]);

  // This would result in lag when incrementing the counter because
  // it would have to wait for computeLetterCount to complete when re-rendering
  // const letterCount = computeLetterCount(word);

  // a button click below updates the state, which causes a re-render
  return (
    <div>
      <h3>Compute number of letters</h3>
      <p>
        "{word}" has {letterCount} letters
      </p>
      <button
        onClick={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
      >
        Next word
      </button>
      
      <h3>Increment a counter</h3>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}