import React from "react";
import Icon from "./icon";
import "./navbar.scss";

function NavBar() {
  return (
    <div className="navbar-root">
      <div className="icon">
        <Icon></Icon>
      </div>
      <div className="elements">
        <div>ลงทะเบียน</div>
      </div>
    </div>
  );
}

export default NavBar;
