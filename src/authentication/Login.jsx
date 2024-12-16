import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import sign from '../../public/assets/sign.json'
import Authcontext from '../myauth/Authcontext';

const Login = () => {
    const {signinuser} = useContext(Authcontext)

    const handlesignin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signinuser(email,password)
        .then(res => {
            console.log('sign in ',res.user);
        })
        .catch(err => {
            console.log(err)
        })

        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-[500px]  lg:text-left">
          <Lottie animationData={sign}></Lottie>
        </div>
        <div className="card bg-base-100 shadow-teal-200 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body " onSubmit={handlesignin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;