import React, { useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Register = () => {
  const { createUser, signInWithGoogle, handleUpdateProfile } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // ** Create a new user with email and password
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    createUser(email, password)
      .then(() => {
        handleUpdateProfile(name);
        e.target.reset();
        navigate(from);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  // ** Sign in with google account
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {})
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Register !!!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <div className="form-control">
              <Link to="/login" type="submit" className="link">
                Already have an account?
              </Link>{" "}
              or
            </div>
            <div className="form-control">
              <button
                onClick={handleGoogleSignIn}
                className="bg-purple-100 flex justify-center gap-2 items-center font-semibold ring-2 ring-purple-500 rounded-md"
              >
                <FcGoogle className="text-xl" />{" "}
                <span>Continue with Google</span>
              </button>
              <button className="bg-purple-100 mt-2 flex justify-center gap-2 items-center font-semibold ring-2 ring-purple-500 rounded-md">
                <FaFacebook className="text-xl text-blue-500" />{" "}
                <span>Continue with Facebook</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
