import React, {  useContext } from 'react';
import Authcontext from '../myauth/Authcontext';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {

    const {user,load} = useContext(Authcontext)
    const location = useLocation()
    if(load){
        return <span className="loading loading-ring loading-lg min-h-screen"></span>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default Private;