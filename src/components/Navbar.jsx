import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="navbar bg-yellow-200 lg:px-20">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
          {user && (
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link
            to="/login"
            onClick={() => logout()}
            className="btn btn-sm btn-warning"
          >
            Logout
          </Link>
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
