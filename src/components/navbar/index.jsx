import React, { useMemo, useContext } from "react";
import Icon from "./icon";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

function NavBar() {
  const { user, signout } = useContext(AuthContext);

  const location = useLocation();
  const path = useMemo(() => {
    return location.pathname;
  });

  return (
    <>
      {!path.includes("/overview") &&
      !path.includes("/manageusers") &&
      !path.includes("/managecontent") ? (
        <div className="navbar-root">
          <Link to={"/"} className="icon">
            <Icon width="150" height="200"></Icon>
          </Link>
          <div className="elements">
            {user ? (
              <>
                <Link to={"/"}>
                  <p className="login-btn">หน้าแรก</p>
                </Link>
                <Link to={"/updateinfo/" + user.userName}>
                  <p className="register-btn">{user.userName.toLowerCase()}</p>
                </Link>
              </>
            ) : (
              <>
                <Link to={"login"}>
                  <p className="login-btn">เข้าสู่ระบบ</p>
                </Link>
                <Link to={"register"} className="register-btn">
                  ลงทะเบียน
                </Link>
              </>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default NavBar;
