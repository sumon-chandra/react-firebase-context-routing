import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  // ** Create a new user with email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then(() => {})
      .catch((err) => console.log(err.message));
    e.target.reset();
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
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-3">
              <Link to="/register" type="submit" className="btn btn-link">
                Don't have an account?
              </Link>
            </div>
            <div className="form-control mt-3">
              <button
                onClick={handleGoogleSignIn}
                className="bg-purple-100 font-semibold ring-2 ring-purple-500 rounded-md"
              >
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
