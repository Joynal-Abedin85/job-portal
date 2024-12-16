import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Authcontext from "./myauth/Authcontext";

const Navbar = () => {
    const {user,signout} = useContext(Authcontext)
    const handleout = () => {
        signout()
        .then(()=> {
            console.log('sign out user')
        })
        .catch(err => {
            console.log('wrong')
        })
    }
    const links = <>
        <li><NavLink to="/">home</NavLink></li>
        <li><NavLink to="">about</NavLink></li>
        <li><NavLink to="">myname</NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
              
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
      {
        user ? <>
        <button onClick={handleout} className="btn">sign out</button>
        </> : <>
        
        <Link className="btn" to="/register">register</Link>
        <Link className="btn" to="/login">login</Link>
        
      
        </>
      }
      </div>
      
      
    </div>
  );
};

export default Navbar;
