const DateDisplay = (): JSX.Element => {
  return <p>Today is {new Date().toLocaleString()}</p>;
};

const HelloWorldWithChild = (): JSX.Element => {
  return (
    <div>
      <h1>Hello World!</h1>
      {/* DateDisplay is a child of HelloWorldChild */}
      <DateDisplay />
    </div>
  );
};

export default HelloWorldWithChild;