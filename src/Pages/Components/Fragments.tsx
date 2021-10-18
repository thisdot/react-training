import { Fragment } from "react";

// adds an extra <div> tag to the HTML
const NoFragment = () => {  
  return (
    <div>
      <span>Hello</span>
      <span>World</span>
    </div>
  );
}

const ExplicitFragment = () => {
  return (
    <Fragment>
      <span>Hello</span>
      <span>World</span>
    </Fragment>
  );
}

const SimpleFragment = () => {
  return (
    <>
      <span>Hello</span>
      <span>World</span>
    </>
  );
}

const Fragments = () => (
  <>
    <h1>No Fragment</h1>
    <NoFragment />
    <hr />
    <h1>Explicit Fragment</h1>
    <ExplicitFragment />
    <hr />
    <h1>Simple Fragment</h1>
    <SimpleFragment />
  </>
);

export default Fragments;