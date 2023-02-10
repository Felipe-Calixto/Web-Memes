import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png"

const NavBar = () => {
  return (
   <nav className={styles.navbar}>
    <div className={styles.logo_conteiner}>
    <img src={logo} className={styles.img_logo}/>
    <NavLink to="/" className={styles.logo}> Web Memes</NavLink> 
    </div>
    <ul className={styles.nav_list}>
        <li>
            <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink> 
        </li>
        <li>
            <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>About</NavLink> 
        </li>
    </ul>
   </nav>
  )
}

export default NavBar