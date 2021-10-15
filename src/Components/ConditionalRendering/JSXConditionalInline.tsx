type Props = {
  message?: string;
  users: Array<string>;
  isLoggedIn: boolean;
}

const JSXConditionalInline = ({ message, users, isLoggedIn }: Props) => {
  return (
    <div>
      <header>
        <p>You are <b>{isLoggedIn ? 'now' : 'not'}</b> logged in.</p>
        {isLoggedIn
          ? <span>Log Out</span>
          : <span>Log In</span>
        }
      </header>

      {message && 
        <p>{message}</p>
      }
      {users.length > 0 &&
        <p>
          There are {users.length} users.
        </p>
      }
    </div>
  );
}

export default JSXConditionalInline;