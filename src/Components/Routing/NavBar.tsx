import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const color = 'green';

  return (
    <ul>
      <li>
        {/* With exact, activeStyle will only be applied if the location is matched exactly */}
        <NavLink to="/" activeStyle={{ color }} exact>
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
        <NavLink to="/routing" activeStyle={{ color }}>
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
        <NavLink to="/testing" activeStyle={{ color }}>
          Testing
        </NavLink>
      </li>
    </ul>    
  );
}