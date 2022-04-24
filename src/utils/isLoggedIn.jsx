import React, { useContext } from "react";
import { useNavigate, useLocation, Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

function IsLoggedIn() {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to={"/"} /> : <Outlet />;
}
export default IsLoggedIn;
