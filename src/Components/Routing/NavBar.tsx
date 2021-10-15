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
        <NavLink to="/components" activeStyle={{ color }}>
          Components
        </NavLink>
      </li>
      <li>
        <NavLink to="/hooks" activeStyle={{ color }}>
          Hooks
        </NavLink>
      </li>
      <li>
        <NavLink to="/routing" activeStyle={{ color }} exact={true}>
          Routing
        </NavLink>
      </li>
      <li>
        <NavLink to="/context" activeStyle={{ color }}>
          Context
        </NavLink>
      </li>
      <li>
        <NavLink to="/redux" activeStyle={{ color }}>
          Redux
        </NavLink>
      </li>
      <li>
        <NavLink to="/exercises" activeStyle={{ color }}>
          Exercises
        </NavLink>
      </li>
    </ul>    
  );
}