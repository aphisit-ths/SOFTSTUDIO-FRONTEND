import React from "react";
import Icon from "./icon";
import "./navbar.scss";

function NavBar() {
  return (
    <div className="navbar-root">
      <div className="icon">
        <Icon width="150" height="200"></Icon>
      </div>
      <div className="elements">
        <p>เข้าสู่ระบบ</p>
        <p className="register-btn">ลงทะเบียน</p>
      </div>
    </div>
  );
}

export default NavBar;
