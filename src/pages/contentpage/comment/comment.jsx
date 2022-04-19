import React from "react";
import "./comment.scss";
function Comment({ comment }) {
  const { comment_id, owner, comment_detail } = comment;
  return (
    <div className="comment-root">
      <div className="score-section">
        <p className="interact-btn">+</p>
        <h2 className="score">15</h2>
        <p className="interact-btn">-</p>
      </div>
      <div className="info-section">
        <div className="info-header">
          <p className="owner-name">{owner}</p>
          <p className="">ตอบกลับ</p>
        </div>
        <div className="info-body">
          <p className="detail">{comment_detail}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
