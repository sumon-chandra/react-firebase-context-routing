import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
const Login = () => {
  const { signIn, signInWithGoogle, signInWithFacebook, signInWithTwitter } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // ** Create a new user with email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then(() => {
        e.target.reset();
        navigate(from);
      })
      .catch((err) => console.error(err.message));
  };

  // ** Sign in with google account
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate(from);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  // ** Sign in with Facebook account
  const handleFacebookSignIn = () => {
    signInWithFacebook()
      .then((res) => {
        navigate(from);
      })
      .catch((error) => {
        console.error(error.code);
      });
  };

  // ** Sign in with Facebook account
  const handleTwitterSignIn = () => {
    signInWithTwitter()
      .then((res) => {
        navigate(from);
      })
      .catch((error) => {
        console.error(error.code);
      });
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content">
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
            <div className="form-control">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control">
              <Link to="/register" type="submit" className="link">
                Don't have an account?
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
              <button
                onClick={handleFacebookSignIn}
                className="bg-purple-100 mt-2 flex justify-center gap-2 items-center font-semibold ring-2 ring-purple-500 rounded-md"
              >
                <FaFacebook className="text-xl text-blue-500" />{" "}
                <span>Continue with Facebook</span>
              </button>
              <button
                onClick={handleTwitterSignIn}
                className="bg-purple-100 mt-2 flex justify-center gap-2 items-center font-semibold ring-2 ring-purple-500 rounded-md"
              >
                <FaTwitter className="text-xl text-blue-500" />{" "}
                <span>Continue with Twitter</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
