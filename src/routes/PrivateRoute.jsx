import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  return loading ? (
    <progress className="progress w-56"></progress>
  ) : user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
