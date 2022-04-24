import React, { useState, useEffect, useContext } from "react";
import "./comment.scss";
import { motion } from "framer-motion";
import { AuthContext } from "../../../context/AuthProvider";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { GET_CONTENT_BY_ID } from "../contentpage";
const DELETE_COMMENT = gql`
  mutation DeleteComment($contentId: Int!, $commentId: Int!) {
    deleteComment(contentId: $contentId, commentId: $commentId)
  }
`;
function Comment({ comment, idx, contentId }) {
  const { user } = useContext(AuthContext);
  const commentUser = comment.user;
  const { commentId, description, date, commentStatus } = comment;
  const isOwner = user.userName === commentUser.userName;
  let score = Math.floor(Math.random() * 100);
  const [DeleteComment, { loading, error }] = useMutation(DELETE_COMMENT, {
    refetchQueries: [GET_CONTENT_BY_ID, "GetContentById"],
  });

  const handleClick = async (e) => {
    const params = {
      commentId: commentId,
      contentId: contentId,
    };
    try {
      await DeleteComment({ variables: params });
    } catch (error) {
      console.log(error);
    }
  };
  const [supportScore, setSupportScore] = useState(score);
  function supportComment() {
    setSupportScore(supportScore + 1);
  }
  function disSupportComment() {
    setSupportScore(supportScore - 1);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: idx * 0.2 }}
      key={idx}
      className="comment-root"
    >
      <div className="score-section">
        <p onClick={supportComment} className="interact-btn">
          +
        </p>
        <h2 className="score">{supportScore}</h2>
        <p onClick={disSupportComment} className="interact-btn">
          -
        </p>
      </div>
      <div className="info-section">
        <div className="info-header">
          <p className="owner-name">{commentUser.userName}</p>
          {isOwner ? (
            <p onClick={handleClick} className="response">
              ลบคอมเม้น
            </p>
          ) : (
            <a href="#comment">ตอบกลับ</a>
          )}
        </div>
        <div className="info-body">
          <p className="detail">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Comment;
