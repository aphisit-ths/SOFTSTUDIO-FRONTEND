import React , { useMemo} from "react";
import Icon from "./icon";
import "./navbar.scss";
import { Link,useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function NavBar() {

  const location = useLocation();
  const path = useMemo(() => {
    return location.pathname
  })

  return (
    <>
    { (!path.includes("/overview") && !path.includes("/manageusers") && !path.includes("/managecontent") )? <div className="navbar-root" >      
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
    </div>: "" }
    </>
  );
}

export default NavBar;
