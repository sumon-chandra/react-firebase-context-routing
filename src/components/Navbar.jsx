import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="navbar bg-yellow-200 lg:px-20">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          daisyUI
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <a>Item 3</a>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <img
              src={user.photoURL}
              className="avatar rounded-full shadow-lg"
              alt=""
            />
            <Link
              to="/login"
              onClick={() => logout()}
              className="btn btn-sm btn-warning"
            >
              Logout
            </Link>
          </>
        ) : (
          <Link to="/login" className="btn btn-smbtn-warning">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
