import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png"
import { useState } from "react";

//Icon
import { FaList } from 'react-icons/fa';
import ResponsiveNavBar from "./ResponsiveNavBar";

import { useAthentication } from "../hooks/useAuthentication";


import { useAuthValue } from "../Context/AuthContext";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

import Swal from 'sweetalert2'

const NavBar = () => {

    const [state, setState] = useState(false);

    const handleState = () => {
        
        setState(!state);
    }

    const { user } = useAuthValue();
    const { logout } = useAthentication();

    const customAlert = () => {
        Swal.fire({
            title: 'Deseja mesmo sair?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sim'
            }).then((result) => {
            if (result.isConfirmed) {
                logout();
            }
        })
    }

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
        {user && (
          <>
          <li>
              <NavLink to="/posts/create" className={({isActive}) => (isActive ? styles.active : "")}>Criar Post</NavLink> 
          </li>
          <li>
              <NavLink to="/dashboard" className={({isActive}) => (isActive ? styles.active : "")}>Dashboard</NavLink> 
          </li>
          </>  
        )}
        {user && (
            <li>
                <NavLink onClick={customAlert}>Sair</NavLink>
            </li>
        ) }
    </ul>
    </div>
    <div>
        {state ? <ResponsiveNavBar/> : null} 
    </div>
   </nav>
  )
}

export default NavBar