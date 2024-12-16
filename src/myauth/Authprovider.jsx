import React, { useEffect, useState } from 'react';
import Authcontext from './Authcontext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../fire/firebase.init';

const googleprovider = new GoogleAuthProvider()

const Authprovider = ({children}) => {
    const [user,setuser] = useState(null)
    const [load,setload] = useState(true)

    const createuser = (email,password) => {
        setload(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signinuser = (email,password) => {
        setload(true)
        return  signInWithEmailAndPassword(auth, email,password)
    }

    const signingoogle = () => {
        setload(true)
        return signInWithPopup(auth,googleprovider)
    }

    const signout =()=> {
        setload(true)
        return signOut(auth)
    }

    useEffect(()=> {
        const unsub = onAuthStateChanged(auth,currentuser =>{
            setuser(currentuser)
            console.log('state is',currentuser)
            setload(false)
        })
        return() => {
            unsub();
        }

    },[])

    const authinfo = {
        user,
        load,
        createuser,
        signinuser,
        signout,
        signingoogle
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;