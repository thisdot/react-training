import { MouseEvent } from "react";

export const ClickEventTarget = () => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    alert(target.value);
  };

  return (
    <button value="hello!" onClick={(e: MouseEvent<HTMLButtonElement>) => handleClick(e)}>
      Click me!
    </button>
  );
}