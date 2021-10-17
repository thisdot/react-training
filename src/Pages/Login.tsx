import { ChangeEvent, SyntheticEvent, useState } from "react";

// see commented lines to use an object for all form fields

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const [formData, setFormData] = useState({
  //   username: '',
  //   password: ''
  // });

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(username, password);
    // console.log(formData);
  };

  // const updateField = (e: ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          value={username}
          onChange={event => setUsername(event.target.value)}
          // value={formData.username}
          // onChange={updateField}          
          id="username"
          name="username"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
          // value={formData.password}
          // onChange={updateField}          
          id="password"
          name="password"
          type="password"
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Login;