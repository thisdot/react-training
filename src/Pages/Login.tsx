const Login = () => {
  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input          
          id="username"
          name="username"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input            
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