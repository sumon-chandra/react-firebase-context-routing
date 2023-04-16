import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Admin = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="text-center py-20">
      <h2 className="text-purple-500 text-4xl font-bold">
        This is the Admin panel
      </h2>
      <p className="text-2xl font-semibold">Your email : {user.email}</p>
    </div>
  );
};

export default Admin;
