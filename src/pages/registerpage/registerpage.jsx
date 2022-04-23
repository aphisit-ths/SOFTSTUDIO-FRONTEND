import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const SIGN_UP = gql`
  mutation Register_user(
    $userName: String!
    $password: String!
    $email: String!
  ) {
    register_user(userName: $userName, password: $password, email: $email) {
      password
      name
      lastName
      userId
      userName
      email
    }
  }
`;
function RegisterPage() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [Register_user, { loading, error }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      if (data) {
        console.log("register sucessfull ===>");
      }
    },
  });
  if (loading) return <p>loading..</p>;

  const onSubmit = async (info) => {
    try {
      await Register_user({ variables: info });
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="registerpage-root"
    >
      <form className="section" onSubmit={handleSubmit(onSubmit)}>
        <h1>ลงทะเบียน</h1>
        <div className="field">
          <p>ชื่อผู้ใช้</p>
          <input
            required
            {...register("userName", {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[A-Za-z][A-Za-z0-9]*$/,
            })}
            type="text"
            placeholder="ชื่อผู้ใช้"
            name="userName"
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
          <p>อีเมล</p>
          <input
            required
            {...register("email", {
              required: true,
              minLength: 3,
              maxLength: 50,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/,
            })}
            type="text"
            placeholder="อีเมล"
            name="email"
          />
          <div className="">
            {errors.email?.type === "required" && (
              <p className="text-red-600">จำเป็นต้องกรอกอีเมล</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-red-600">รูปแบบอีเมลไม่ถูกต้อง</p>
            )}
            {errors.email?.type === "minLength" && (
              <p className="text-red-600">
                อีเมลต้องมีตั้งแต่ 3 ตัวอักษรขึ้นไป
              </p>
            )}
            {errors.email?.type === "maxLength" && (
              <p className="text-red-600">อีเมลต้องมีไม่เกิน 50 ตัวอักษร</p>
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
            type="text"
            placeholder="รหัสผ่าน"
            name="password"
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
          ลงทะเบียน
        </button>
        {error && (
          <p className="px-4 py-2 rounded-xl text-white shadow-md bg-red-400 cursor-pointer">
            {error.message}
          </p>
        )}

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
