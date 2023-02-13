import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png"
import { useState } from "react";

//Icon
import { FaList } from 'react-icons/fa';
import ResponsiveNavBar from "./ResponsiveNavBar";


const NavBar = () => {

    const [state, setState] = useState(false);

    const handleState = () => {
        
        setState(!state);
    }
    console.log(state)
    return (
   <nav className={styles.navbar_father}>
    <div className={styles.navbar}>
    <div className={styles.logo_conteiner}>
    <img src={logo} className={styles.img_logo}/> 
    <NavLink to="/" className={styles.logo}> Web Memes</NavLink> 
    </div>
    <div className={styles.responsive_dashboard}>
        <p onClick={handleState}><FaList/></p>
    </div>
    <ul className={styles.nav_list}>
        <li>
            <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink> 
        </li>
        <li>
            <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>About</NavLink> 
        </li>
        <li>
            <NavLink to="/cadastro" className={({isActive}) => (isActive ? styles.active : "")}>Cadastro</NavLink> 
        </li>
    </ul>
    </div>
    <div>
        {state ? <ResponsiveNavBar/> : null} 
    </div>
   </nav>
  )
}

export default NavBar