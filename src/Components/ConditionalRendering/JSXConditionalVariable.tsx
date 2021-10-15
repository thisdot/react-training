type Props = {
  isLoggedIn: boolean;
}

const JSXConditionalVariable = ({ isLoggedIn }: Props) => {
  let greeting;
  if (isLoggedIn) {
    greeting = (
      <div>
        <p>You are logged in.</p>
        <span>Log Out</span>
      </div>
    );
  } else {
    greeting = <span>Log In</span>;
  }

  return (
    <main>
      {greeting}
    </main>
  );
}

export default JSXConditionalVariable;