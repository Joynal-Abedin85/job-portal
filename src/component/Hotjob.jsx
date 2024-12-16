import React, { useEffect, useState } from 'react';
import Jobcard from './Jobcard';

const Hotjob = () => {
    const [jobs,setjobs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setjobs(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {jobs.map(job => <Jobcard key={job._id} job={job}></Jobcard>)}
            
        </div>
    );
};

export default Hotjob;