import styles from "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
   <nav>
    <NavLink to="/">WebMemes</NavLink> 
    <ul>
        <li>
            <NavLink to="/">Home</NavLink> 
        </li>
        <li>
            <NavLink to="/about">About</NavLink> 
        </li>
    </ul>
   </nav>
  )
}

export default NavBar