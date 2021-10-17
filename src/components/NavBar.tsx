import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const color = 'green';

  return (
    <ul>
      <li>
        <NavLink to="/" activeStyle={{ color }} exact={true}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={{ color }}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/users" activeStyle={{ color }}>
          Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeStyle={{ color }}>
          Login
        </NavLink>
      </li>
    </ul>    
  );
}