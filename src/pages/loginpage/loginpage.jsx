import React from "react";
import { Link } from "react-router-dom";
import "./loginpage.scss";
import { motionVariants } from "../../utils/motion_variant";
import { motion } from "framer-motion";
function LoginPage() {
  return (
    <motion.div
      animate="slideToLeft"
      variants={motionVariants}
      className="loginpage-root"
      transition={{ duration: 0.5, ease: "easeIn" }}
      exit={{ opacity: 0 }}
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
