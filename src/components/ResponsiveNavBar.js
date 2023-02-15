import styles from "./ResponsiveNavBar.module.css"

import { NavLink } from "react-router-dom";

import { useAthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../Context/AuthContext";

import Swal from 'sweetalert2'

const ResponsiveNavBar = () => {

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
    <nav className={styles.navbar}>
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
    </nav>
  )
}

export default ResponsiveNavBar