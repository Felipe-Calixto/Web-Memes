import styles from "./Cadastrar.module.css";
import { useState } from "react";
import { useAthentication } from "../../hooks/useAuthentication"


//Icons
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

import Swal from 'sweetalert2'

const Cadastrar = () => {

    const [displayName, setDisplayName] = useState("");    
    const [email, setEmail] = useState("");    
    const [password, setPassword] = useState("");    
    const [confirmPassword, setConfirmPassword] = useState("");    
    
    const {createUser, error: authError, loading} = useAthentication

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            displayName, 
            email,
            password
        }

        if (password !== confirmPassword) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                width: '400',
                title: 'As senhas devem ser iguais',
                showConfirmButton: false,
                timer: 1500
              })
            return
        }
        
    }

  return (
    <div className={styles.cadastro_conteiner}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.text}>Criar Conta</h1>
            <label htmlFor="" className={styles.icon_user}><FaUser/></label>
            <input type="text" required placeholder="Nome" className={styles.input_form} value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
            <label htmlFor="" className={styles.icon_envelope}><FaRegEnvelope/></label>
            <input type="email" required placeholder="Email" className={styles.input_form} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="" className={styles.icon_lock}><FaLock/></label>
            <input type="password" required placeholder="Senha" className={styles.input_form} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <label htmlFor="" className={styles.icon_lock}><FaLock/></label>
            <input type="password" required placeholder="Confirmar Senha" className={styles.input_form} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            <button className={styles.bnt}>Cadastrar</button>
        </form>
    </div>
  )
}

export default Cadastrar