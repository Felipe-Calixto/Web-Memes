import { async } from "@firebase/util";
import { db } from "../firebase/config"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth";

import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

export const useAthentication = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();
    
    function checkCancelled() {
        if(cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkCancelled();

        setLoading(true);
    
        try {
            
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })


            Swal.fire({
                position: 'center',
                icon: 'success',
                width: '400',
                title: 'Usuário cadastrado com sucesso.',
                showConfirmButton: false,
                timer: 1500
              })  

            setLoading(false);

            return user;

        } catch (error) {
            
            console.log(error.message);
            console.log(typeof error.message);

            if (error.message.includes("Password")) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    width: '400',
                    title: 'A senha precisa conter pelo menos 6 caracteres.',
                    showConfirmButton: false,
                    timer: 1500
                  })
            } else if (error.message.includes("email-already")) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    width: '400',
                    title: 'Email já cadastrado.',
                    showConfirmButton: false,
                    timer: 1500
                  })  
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    width: '400',
                    title: 'Ocorreu um erro, por favor tente mais tarde.',
                    showConfirmButton: false,
                    timer: 1500
                  })    
            }

            setLoading(false);
        }

        
    }

    const logout = async () => {

        checkCancelled();
        
        await signOut(auth)
    }

    const login = async(data) => {

        checkCancelled();
        setLoading(true);

        try {

            await signInWithEmailAndPassword(auth, data.email, data.password);

            setLoading(false);
        } catch (error) {
            
            if (error.message.includes("user-not-found")) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    width: '400',
                    title: 'Usuário não encontrado.',
                    showConfirmButton: false,
                    timer: 1500
                  })
            } else if (error.message.includes("wrong-password")) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    width: '400',
                    title: 'Senha incorreta.',
                    showConfirmButton: false,
                    timer: 1500
                  })  
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    width: '400',
                    title: 'Ocorreu um erro, por favor tente mais tarde.',
                    showConfirmButton: false,
                    timer: 1500
                  })    
            }

            setLoading(false);
        }
    }

    useEffect(() => {
    
        return () => setCancelled(true);
    }, [])
    

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }


}