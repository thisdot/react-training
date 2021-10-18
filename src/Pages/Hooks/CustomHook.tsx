import { useState } from "react"

export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue(!value);
  return [value, toggleValue];
}

const CustomHook = () => {
  const [isVisible, toggleIsVisible] = useToggle(false);
  
  return (
    <div> 
      <button onClick={toggleIsVisible}>Hello</button>
      {isVisible && <div>World</div>}
    </div>
  );
};

export default CustomHook;