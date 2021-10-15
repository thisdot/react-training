import { useState } from "react";

const PropsChildToParent = (): JSX.Element => {
  const [isTitle, setIsTitle] = useState(true);

  const handleClick = () => {
    setIsTitle(!isTitle);
  };
  
  return (
    <div>
      {isTitle && <h1>Parent</h1> }
      <Child onClickEvent={handleClick} />
    </div>
  );
};

export default PropsChildToParent;

type ChildProps = {    
  onClickEvent: React.MouseEventHandler<HTMLButtonElement>;
};

const Child = ({ onClickEvent }: ChildProps): JSX.Element => {
  return (
    <div>
      <button onClick={onClickEvent}>Toggle Parent Title</button>
    </div>
  );
};