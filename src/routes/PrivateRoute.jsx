import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);

  return loading ? (
    <progress className="progress w-56"></progress>
  ) : user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default PrivateRoute;
