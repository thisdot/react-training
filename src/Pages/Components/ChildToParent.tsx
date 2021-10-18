import { useState } from "react";

const Parent = (): JSX.Element => {
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

type ChildProps = {    
  onClickEvent: React.MouseEventHandler<HTMLButtonElement>;
};

const Child = ({ onClickEvent }: ChildProps): JSX.Element => {
  return (
    <div>
      <button onClick={onClickEvent}>Toggle Parent Title from child</button>
    </div>
  );
};

const ChildToParent = () => <Parent />;

export default ChildToParent;