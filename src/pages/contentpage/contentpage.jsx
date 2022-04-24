import React, { useContext, useEffect, useState } from "react";
import "./contentpage.scss";
import { AiFillHeart } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Comment from "./comment/comment";
import { motion } from "framer-motion";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";

export const GET_CONTENT_BY_ID = gql`
  query GetContentById($contentId: Int!) {
    getContentById(contentId: $contentId) {
      contentId
      title
      description
      location
      imageURL
      tag
      commentList {
        commentId
        description
        date
        commentStatus
        user {
          userId
          userName
          status
        }
      }
    }
  }
`;
const CREATE_COMMENT = gql`
  mutation addComment($contentId: Int!, $description: String!) {
    addComment(contentId: $contentId, description: $description)
  }
`;
function ContentPage() {
  const [like, setLike] = useState();
  useEffect(() => {
    const rand = Math.floor(Math.random() * 50);
    setLike(rand);
  }, []);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const params = useParams();
  const id = params.id;
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useQuery(GET_CONTENT_BY_ID, {
    variables: { contentId: parseInt(id) },
  });
  const [addComment, {}] = useMutation(CREATE_COMMENT, {
    refetchQueries: [
      GET_CONTENT_BY_ID, // DocumentNode object parsed with gql
      "GetContentById", // Query name
    ],
  });

  if (loading) return <p>loading</p>;
  if (error) return <p>{error.message}</p>;
  const {
    title,
    commentList,
    description,
    imageURL,
    contentId,
    tag,
    location,
  } = data.getContentById;
  const onSubmit = async (info) => {
    const vars = { ...info, contentId: contentId };
    try {
      await addComment({ variables: vars });
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  const comment_elements = commentList.map((commentList, i) => (
    <Comment
      contentId={contentId}
      key={i}
      comment={commentList}
      idx={i}
    ></Comment>
  ));
  return (
    <div className="contentpage-root">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="middle-section"
      >
        <div className="images-section">
          <div className="one-image">
            <img src={imageURL} alt={title} />
          </div>
        </div>
        <div className="body-section">
          <div className="top-section">
            <p className="tags"> หมวดหมู่ : {tag.map((tag) => `${tag} `)}</p>
            <h1 className="name">{title}</h1>
            <h1 className="location">{location}</h1>
          </div>
          <p className="body">{description}</p>
        </div>
      </motion.div>
      <div className="like-section">
        <div className="like">
          <AiFillHeart style={{ fontSize: 28 }} />
          {like}
        </div>
        <div className="like">
          แชร์
          <FaShare style={{ fontSize: 28 }} />
        </div>
      </div>
      <div className="comment-section">
        {comment_elements}
        <form onSubmit={handleSubmit(onSubmit)} className="addcomment-section">
          {user ? (
            <>
              <div className="area">
                <textarea
                  {...register("description", {
                    required: true,
                    minLength: 5,
                    maxLength: 500,
                  })}
                  required
                  name="description"
                  placeholder="โปรดใช้ถ้อยคำที่สุภาพ"
                />
                {errors.description?.type === "minLength" && (
                  <p className="text-red-500">
                    คอมเม้นที่ดีควรเริ่มต้นที่ 5 ตัวอักษร :)
                  </p>
                )}
                {errors.description?.type === "maxLength" && (
                  <p className="text-red-500">ไม่เกิน 500 ตัวอักษร)</p>
                )}
              </div>
              <div id="comment" className="textarea-interaction">
                <button type="submit" className="comfirm">
                  ส่ง
                </button>
                <p onClick={() => reset()} className="cancle">
                  ยกเลิก
                </p>
              </div>
            </>
          ) : (
            <div className="warn-section">
              <h1>ก่อนแสดงความคิดเห็นต้อง</h1>
              <div className="warn">
                <Link to={"/login"}>
                  <p className="login-btn"> เข้าสู่ระบบ</p>
                </Link>
                <h2>หรือ</h2>
                <Link to={"/register"}>
                  <p className="register-btn"> ลงทะเบียน</p>
                </Link>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContentPage;
