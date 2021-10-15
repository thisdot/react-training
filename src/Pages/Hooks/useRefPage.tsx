import { DomRefDiv } from "../../Components/Hooks/useRef/DomRefDiv";
import { DomRefFocus } from "../../Components/Hooks/useRef/DomRefFocus";
import { DomRefNull } from "../../Components/Hooks/useRef/DomRefNull";
import { LogButtonClicks } from "../../Components/Hooks/useRef/VariableRef";

export const UseRefPage = () => {
  return (
    <div>
      <h1>useRef</h1>

      <h2>useRef - access a div element</h2>
      <DomRefDiv />
      
      <h2>useRef - undefined during initial render</h2>
      <DomRefNull />

      <h4>useRef - input focus</h4>
      <DomRefFocus />

      <h4>useRef - variable</h4>
      <LogButtonClicks />
    </div>
  );
};
