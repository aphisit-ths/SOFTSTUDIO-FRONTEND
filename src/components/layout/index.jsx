import React from "react";
import NavBar from "../navbar";
import { useLocation } from "react-router-dom";

function Layout(props) {
  let location = useLocation();
  const isAdminRoute = location.pathname;
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
}

export default Layout;
