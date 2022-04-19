import React, { useState, useEffect } from "react";
import "./comment.scss";
import { motion } from "framer-motion";
function Comment({ comment, idx }) {
  const { comment_id, owner, comment_detail } = comment;
  let score = Math.floor(Math.random() * 100);
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
      transition={{ ease: "easeInOut", duration: idx * 0.5 }}
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
          <p className="owner-name">{owner}</p>
          <a href="#comment" className="response">
            ตอบกลับ
          </a>
        </div>
        <div className="info-body">
          <p className="detail">{comment_detail}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Comment;
