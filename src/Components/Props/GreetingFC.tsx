import React from "react";

type Props = {
  message: string;
};

const GreetingFC: React.FC<Props> = ({ message }): JSX.Element => {
  return <h1>{message}</h1>;
};

export default GreetingFC;