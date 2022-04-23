import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginpage.scss";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import Cookies from "js-cookie";
import gql from "graphql-tag";
import { AuthContext } from "../../context/AuthProvider";
const SIGN_IN = gql`
  mutation SIGN_IN($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      user {
        status
        userId
        userName
        email
        lastName
        name
      }
      isAdmin
    }
  }
`;

function LoginPage() {
  const { setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [login, { loading, error }] = useMutation(SIGN_IN, {
    onCompleted: (data) => {
      if (data) {
        setAuthUser(data.login.user);
        // Cookies.set("user", data.login.user.userId);
        navigate("/");
        console.log("login sucessfull ===>");
      }
    },
  });
  const onSubmit = async (info) => {
    try {
      await login({ variables: info });
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: 600 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="loginpage-root"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="section">
        <h1>เข้าสู่ระบบ</h1>
        <div className="field">
          <p>ชื่อผู้ใช้ </p>
          <input
            required
            {...register("userName", {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[A-Za-z][A-Za-z0-9]*$/,
            })}
            name="userName"
            type="text"
            placeholder="ชื่อผู้ใช้ (username)"
          />
          <div>
            {errors.userName?.type === "required" && (
              <p className="text-red-500">จำเป็นต้องมีชื่อผู้ใช้</p>
            )}
            {errors.userName?.type === "pattern" && (
              <p className="text-red-500">
                รูปแบบชื่อผู้ใช้เล่นต้องเป็นภาษาอังกฤษเท่านั้น
              </p>
            )}
            {errors.userName?.type === "minLength" && (
              <p className="text-red-500">
                ชื่อผู้ใช้เล่นต้องมีตั้งแต่ 3 ตัวอักษรขึ้นไป
              </p>
            )}
            {errors.userName?.type === "maxLength" && (
              <p className="text-red-500">
                ชื่อผู้ใช้เล่นต้องมีไม่เกิน 20 ตัวอักษร
              </p>
            )}
          </div>
        </div>
        <div className="field">
          <p>รหัสผ่าน</p>
          <input
            required
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 50,
            })}
            placeholder="รหัสผ่าน"
            name="password"
            type="password"
          />
          <div className="my-2">
            {errors.password?.type === "required" && (
              <p className="text-red-500" args="จำเป็นต้องกรอกรหัสผ่าน">
                จำเป็นต้องกรอกรหัสผ่าน
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p
                className="text-red-500"
                args="กรอกรหัสผ่านอย่างน้อย 6 ตัวอักษร"
              >
                กรอกรหัสผ่านอย่างน้อย 6 ตัวอักษร
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p
                className="text-red-500"
                args="รหัสผ่านต้องมีไม่เกิน 50 ตัวอักษร"
              >
                รหัสผ่านต้องมีไม่เกิน 50 ตัวอักษร
              </p>
            )}
          </div>
        </div>
        <button disabled={loading} type="submit">
          เข้าสู่ระบบ
        </button>
        {error && (
          <p className="px-6 py-2 rounded-md text-white shadow-md bg-red-600 cursor-pointer">
            {error.message}
          </p>
        )}
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
