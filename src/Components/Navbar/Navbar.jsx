import { NavLink } from "react-router";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"/home"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
