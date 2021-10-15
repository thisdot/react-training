import React from "react";

export const NoFragment: React.FC = () => {
  // adds an extra <div> tag to the HTML
  return (
    <div>
      <span>Hello</span>
      <span>World</span>
    </div>
  );
}

export const FragmentHelloWorld: React.FC = () => {
  return (
    <React.Fragment>
      <span>Hello</span>
      <span>World</span>
    </React.Fragment>
  );
}

export const FragmentHelloWorldSimple: React.FC = () => {
  return (
    <>
      <span>Hello</span>
      <span>World</span>
    </>
  );
}