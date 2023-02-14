import styles from "./ResponsiveNavBar.module.css"

import { NavLink } from "react-router-dom";

const ResponsiveNavBar = () => {
  return (
    <nav className={styles.navbar}>
       <ul className={styles.nav_list}>
        <li>
            <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink> 
        </li>
        <li>
            <NavLink to="/login" className={({isActive}) => (isActive ? styles.active : "")}>Entrar</NavLink> 
        </li>
        <li>
            <NavLink to="/cadastro" className={({isActive}) => (isActive ? styles.active : "")}>Cadastro</NavLink> 
        </li>
        <li>
            <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>About</NavLink> 
        </li>
    </ul> 
    </nav>
  )
}

export default ResponsiveNavBar