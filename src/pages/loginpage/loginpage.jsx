import React from "react";
import { Link } from "react-router-dom";
import "./loginpage.scss";
import { motionVariants } from "../../utils/motion_variant";
import { motion } from "framer-motion";
function LoginPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: 600 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="loginpage-root"
    >
      <form className="section">
        <h1>เข้าสู่ระบบ</h1>
        <div className="field">
          <p>อีเมล</p>
          <input type="text" placeholder="อีเมล" />
        </div>
        <div className="field">
          <p>รหัสผ่าน</p>
          <input type="text" placeholder="รหัสผ่าน" />
        </div>
        <button>เข้าสู่ระบบ</button>
        <Link to={"/register"}>
          <p>
            ไม่มีบัญชีผู้ใช้ ?<span> ลงทะเบียน</span>
          </p>
        </Link>
      </form>
    </motion.div>
  );
}

export default LoginPage;
