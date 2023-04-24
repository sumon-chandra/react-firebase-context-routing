import React, { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const avatarImg = user?.photoURL;
  return (
    <nav className="navbar px-0 lg:px-32 mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <BiMenu />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">About</Link>
            </li>

            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          RFC
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Blogs</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user ? (
                <img src={avatarImg} />
              ) : (
                <FaUserCircle className="w-full h-full" />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/">Setting</Link>
            </li>
            {user ? (
              <li>
                <Link onClick={logout} to="/login">
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
