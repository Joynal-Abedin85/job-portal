import Lottie from "lottie-react";
import React, { useContext } from "react";
import register from '../../public/assets/Animation - 1734239926014.json'
import Authcontext from "../myauth/Authcontext";

const Register = () => {

    const {createuser,signingoogle} = useContext(Authcontext)

    const handlegoogle =()=> {
      signingoogle()
      .then(res=> {
        console.log(res.user)
      })
      .catch(err=> {
        console.log(err.message)
      })
    }

    const handleregister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        createuser(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(err => {
            console.log(err)
        })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-[500px]  lg:text-left">
          <Lottie animationData={register}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl shadow-blue-200">
          <form className="card-body" onSubmit={handleregister}>
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
              <button className="btn btn-primary">register</button>
            </div>

          </form>

          <button onClick={handlegoogle} className="btn btn-primary">google login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
