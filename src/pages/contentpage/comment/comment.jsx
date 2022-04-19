import React, { useState, useEffect } from "react";
import "./comment.scss";
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
    <div key={idx} className="comment-root">
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
          <p className="response">ตอบกลับ</p>
        </div>
        <div className="info-body">
          <p className="detail">{comment_detail}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
