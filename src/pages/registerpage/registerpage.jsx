import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import { motionVariants } from "../../utils/motion_variant";
import { motion } from "framer-motion";
function RegisterPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="registerpage-root"
    >
      <form className="section">
        <h1>ลงทะเบียน</h1>
        <div className="field">
          <p>ชื่อผู้ใช้</p>
          <input type="text" placeholder="ชื่อผู้ใช้" />
        </div>
        <div className="field">
          <p>อีเมล</p>
          <input type="text" placeholder="อีเมล" />
        </div>
        <div className="field">
          <p>รหัสผ่าน</p>
          <input type="text" placeholder="รหัสผ่าน" />
        </div>
        <button>ลงทะเบียน</button>
        <Link to={"/login"}>
          <p>
            มีบัญชีผู้ใช้แล้ว ?<span> เข้าสู่ระบบ</span>
          </p>
        </Link>
      </form>
    </motion.div>
  );
}

export default RegisterPage;
