import { async } from "@firebase/util";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    singOut
} from "firebase/auth";

import { useState, useEffect } from "react";

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

            return user;

        } catch (error) {
            
            console.log(error.message);
            console.log(typeof error.message);

            setLoading(false);

            setCancelled(true);
           
            return {
                auth,
                createUser,
                error,
                loading
            }
        }

    }




}