import styles from "./Login.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAthentication } from "../../hooks/useAuthentication";

//Icons
import { FaLock } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

import Swal from 'sweetalert2';

const Login = () => {

  const [email, setEmail] = useState("");    
  const [password, setPassword] = useState("");    

  const {login, error: authError, loading} = useAthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
        email,
        password
    }

  const res = await login(user);

};

  return (
    <div className={styles.cadastro_conteiner}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.text}>Logar</h1>
            <label htmlFor="" className={styles.icon_envelope}><FaRegEnvelope/></label>
            <input type="email" required placeholder="Email" className={styles.input_form} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="" className={styles.icon_lock}><FaLock/></label>
            <input type="password" required placeholder="Senha" className={styles.input_form} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <p className={styles.p}>Não possui uma conta? <NavLink to="/cadastro">Cadastre-se</NavLink></p>
            <button className={styles.bnt}>Entrar</button>
        </form>
    </div>
  )
}

export default Login