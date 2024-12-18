import React, { useContext, useEffect, useState } from 'react';
import Authcontext from '../myauth/Authcontext';

const Myapplyjob = () => {

    const {user} = useContext(Authcontext)
    const [jobs,setjob] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/myjob?email=${user.email}`)
        .then(res => res.json())
        .then(data => setjob(data))
    },[user.email])
    return (
        <div>
            <h2>my apply is {jobs.length}</h2>
        </div>
    );
};

export default Myapplyjob;