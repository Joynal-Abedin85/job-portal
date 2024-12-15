import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Mainlayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;