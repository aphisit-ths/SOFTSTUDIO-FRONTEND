import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation, Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import AdminLayout from "../components/admin/layout";
import App from "../App";
function UserProtectedRoute() {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to={"/login"} />;
}

export function IsLoggedIn() {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to={"/"} /> : <Outlet />;
}
export function IsAddminLayout({ children }) {
  const [toggleLayout, setToggleLayout] = useState(false);
  const locate = useLocation();
  useEffect(() => {
    let pathname = locate.pathname.split("/")[1];
    if (pathname === "admin") {
      setToggleLayout(true);
    } else {
      setToggleLayout(false);
    }
  }, [toggleLayout, locate]);
  return toggleLayout ? (
    <AdminLayout children={children} />
  ) : (
    <App children={children} />
  );
}
export default UserProtectedRoute;
