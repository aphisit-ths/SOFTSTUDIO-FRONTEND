import React, { useState } from "react";
import "./content.scss";
import { AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
function Content({ data, i }) {
  const navigate = useNavigate();
  const { title, commentList, description, imageURL, contentId } = data;
  const like = Math.floor(Math.random() * 100);
  const [likeToggle, setLikeToggle] = useState(false);
  let [likeScore, setLikeScore] = useState(like);
  function likedContent() {
    if (!likeToggle) {
      setLikeToggle(!likeToggle);
      setLikeScore(likeScore + 1);
    } else {
      setLikeToggle(!likeToggle);
      setLikeScore(likeScore - 1);
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ ease: "easeInOut", duration: 1 * 0.5 }}
      exit={{ x: 600 }}
      key={i}
      className="content-root"
    >
      <div
        onClick={() => navigate("content/" + contentId)}
        className="image-section"
      >
        <img src={imageURL} alt={title} className="img" />
      </div>
      <div className="info-section">
        <div className="body-section">
          <h1
            onClick={() => navigate("content/" + contentId)}
            className="title"
          >
            {title}
          </h1>
          <p className="body"> {description}</p>
        </div>
        <div className="interaction">
          <div
            onClick={likedContent}
            className={`button${likeToggle ? "onclick" : ""}`}
          >
            <AiFillHeart
              style={
                !likeToggle
                  ? { color: "#f8f8f8", fontSize: 50 }
                  : { color: "#f8f8f8", fontSize: 50 }
              }
            />
            <p>{likeScore}</p>
          </div>
          <div className="button">
            <AiOutlineComment
              style={{ color: "#f8f8f8", fill: "white", fontSize: 50 }}
            />
            <p>{commentList.length}</p>
          </div>
          <div
            onClick={() => navigate("content/" + contentId)}
            className="button"
          >
            <p>อ่านต่อ</p>
            <p>....</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Content;
