import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png"
import { useState } from "react";

//Icon
import { FaList } from 'react-icons/fa';
import ResponsiveNavBar from "./ResponsiveNavBar";

import { useAthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../Context/AuthContext";

const NavBar = () => {

    const [state, setState] = useState(false);

    const handleState = () => {
        
        setState(!state);
    }

    const user = useAuthValue();
    
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
        {!user && (
        <>
        <li>
            <NavLink to="/login" className={({isActive}) => (isActive ? styles.active : "")}>Entrar</NavLink> 
        </li>
        <li>
            <NavLink to="/cadastro" className={({isActive}) => (isActive ? styles.active : "")}>Cadastro</NavLink> 
        </li>
        </>
        )}
        <li>
            <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>About</NavLink> 
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