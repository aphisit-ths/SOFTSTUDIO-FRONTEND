import React from "react";
import Icon from "./icon";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
function NavBar() {
  let navigator = useNavigate;
  let location = useLocation;

  //route to login page

  return (
    <div className="navbar-root">
      <Link to={"/"} className="icon">
        <Icon width="150" height="200"></Icon>
      </Link>
      <div className="elements">
        <Link to={"login"}>
          <p className="login-btn">เข้าสู่ระบบ</p>
        </Link>
        <Link to={"register"} className="register-btn">
          <p className="register-btn">ลงทะเบียน</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
