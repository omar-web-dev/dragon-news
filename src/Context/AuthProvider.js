import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleLongIn = provider => {
        return signInWithPopup(auth, provider)
    }

    // log in with email c
    const createUser = (email, password) => signInWithEmailAndPassword(auth, email, password)

    // log in with email and password 
    const singInEmailPassword = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    // registration with email and password 
    // const SingUpEmailPassword = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    // log out current user
    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
        })
        return unSubscribe();
    }, [])

    const authInfo = { user, googleLongIn, logOut, createUser, singInEmailPassword }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;