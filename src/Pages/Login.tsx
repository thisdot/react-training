import { SyntheticEvent, useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: SyntheticEvent) => {
    console.log(e);
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          id='username'
          name='username'
          type='text'
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          id='password'
          name='password'
          type='password'
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Login;
