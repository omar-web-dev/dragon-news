import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const googleLongIn = provider =>{
        return signInWithPopup(auth, provider)
    }

    
    const createUser = (email, password) => signInWithEmailAndPassword(auth, email, password)
    // const user = {displayName : 'Omar Faruk'}
    
    const logOut = () => {
        signOut(auth)
    }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log( currentUser);
            setUser(currentUser)
        })
        return unSubscribe();
    },[])
    
    const authInfo = {user, googleLongIn, logOut, createUser}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;