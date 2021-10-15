import { useToggle } from "../../Components/Hooks/CustomHooks/useToggle";

export const CustomHooksPage = () => {
  const [isVisible, toggleIsVisible] = useToggle(false);
  
  return (
    <div>
      <h1>Custom Hooks</h1>

      <h2>useToggle custom hook</h2>    
      <button onClick={toggleIsVisible}>Hello</button>
      {isVisible && <div>World</div>}
    </div>
  );
};
