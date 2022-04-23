import React, { useContext, useState } from "react";
import "./edituser.scss";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { AuthContext } from "../../context/AuthProvider";

function EditUserPage() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const { user, signout } = useContext(AuthContext);
  const [userInfo, setuserInfo] = useState(user);
  const [toggle, setToggle] = useState(false);
  const onSubmit = async (info) => {
    try {
      console.log(info);
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
      className="edituserpage-root"
    >
      <form className="section" onSubmit={handleSubmit(onSubmit)}>
        <h1>แก้ไขข้อมูลส่วนตัว</h1>
        <div className="field">
          <p>ชื่อ</p>
          <input
            required
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[A-Za-z][A-Za-z0-9]*$/,
            })}
            type="text"
            placeholder={userInfo.name}
            name="name"
            value={userInfo.name}
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
          <p>นามสกุล</p>
          <input
            required
            {...register("lastName", {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[A-Za-z][A-Za-z0-9]*$/,
            })}
            type="text"
            placeholder={userInfo.lastName}
            name="lastname"
            value={userInfo.lastName}
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
            value={userInfo.email}
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
        <div className="interact">
          <p className="delete-account">ลบบัญชี</p>
          <p onClick={() => setToggle(!toggle)} className="edit">
            แก้ใขข้อมูล
          </p>
        </div>
        {/* <button type="submit">แก้ไขข้อมูล</button> */}
        {/* {error && (
          <p className="px-4 py-2 rounded-xl text-white shadow-md bg-red-400 cursor-pointer">
            {error.message}
          </p>
        )} */}
      </form>
      <p onClick={signout} className="signout-btn">
        ออกจากระบบ
      </p>
    </motion.div>
  );
}

export default EditUserPage;
