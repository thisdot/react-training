type Props = {
  isLoggedIn: boolean;
};

// inline conditional rendering
const HelloWorld = ({ isLoggedIn }: Props) => {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>You are {isLoggedIn ? 'currently' : 'not'} logged in.</p>
    </div>
  );
};

// inline conditional rendering with &&
const HelloWorld2 = ({ isLoggedIn }: Props) => {
  return (
    <div>
      <h1>Hello World!</h1>
      {isLoggedIn && <a href='/'>Sign out</a>}
    </div>
  );
};

// conditional rendering with a variable
const HelloWorld3 = ({ isLoggedIn }: Props) => {
  const action = isLoggedIn ? <button>Sign out</button> : <button>Log In</button>;
  
  return (
    <div>
      <h1>Hello World!</h1>
      {action}
    </div>
  );
};

export {};

const ConditionalRendering = () => (
  <>
    <HelloWorld isLoggedIn />
    <hr />
    <HelloWorld2 isLoggedIn />
    <hr />
    <HelloWorld3 isLoggedIn={false} />
  </>
);

export default ConditionalRendering;