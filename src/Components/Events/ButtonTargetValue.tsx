import { MouseEvent } from "react";

export const ButtonTargetValue = () => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    alert(`Got value attribute from button clicked: ${target.value}`);
  };

  return (
    <button value="hello!" onClick={(e: MouseEvent<HTMLButtonElement>) => handleClick(e)}>
      Click me!
    </button>
  );
}