import { FC } from "react-router/node_modules/@types/react";

// regular function with a one line return
function HelloWorld() {
  return <h1>Hello World!</h1>;
};

// regular function that supports a multiple line return
function HelloWorld2() {
  return (
    <h1>Hello World!</h1>
  );
};

// inline function that just returns JSX
const HelloWorld3 = () => (
  <h1>Hello World!</h1>
);

// inline function with a return type
const HelloWorld4 = (): JSX.Element => (
  <h1>Hello World!</h1>
);

// inline function with a type and a return type
const HelloWorld5: FC = (): JSX.Element => (
  <h1>Hello World!</h1>
);

// inline function that can do some logic and then return JSX
const HelloWorld6 = () => {
  return (
    <h1>Hello World!</h1>
  );
};

const BasicComponents = () => (
  <>
    <HelloWorld />
    <hr />
    <HelloWorld2 />
    <hr />
    <HelloWorld3 />
    <hr />
    <HelloWorld4 />
    <hr />
    <HelloWorld5 />
    <hr />
    <HelloWorld6 />
  </>
);

export default BasicComponents;