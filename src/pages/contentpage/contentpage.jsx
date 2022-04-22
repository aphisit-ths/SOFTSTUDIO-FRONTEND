import React, { useEffect } from "react";
import "./contentpage.scss";
import { AiFillHeart } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Comment from "./comment/comment";
import { motion } from "framer-motion";
import axios from "axios";
function ContentPage() {
  const params = useParams();
  const { id } = params;
  const data = require("../../database/mockup.json");
  const { title, comments, body, img_url, tags, location } = data[id - 1];
  const count_img = img_url.length === 1;

  const preview_image = img_url.map((img_url, idx) => (
    <div key={idx} className={count_img ? "one-image" : "images"}>
      <img src={img_url} alt={img_url} />
    </div>
  ));
  const like = Math.floor(Math.random() * 100);
  const comment_elements = comments.map((comments, i, rand) => (
    <Comment comment={comments} idx={i} rand={rand}></Comment>
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
        <div className="images-section">{preview_image}</div>
        <div className="body-section">
          <div className="top-section">
            <p className="tags">
              {" "}
              หมวดหมู่ : {tags.map((tags) => `${tags}, `)}
            </p>
            <h1 className="name">{title}</h1>
            <h1 className="location">{location}</h1>
          </div>
          <p className="body">{body}</p>
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
        <div className="addcomment-section">
          <textarea placeholder="โปรดใช้ถ้อยคำที่สุภาพ" />
          <div id="comment" className="textarea-interaction">
            <p className="comfirm">ส่ง</p>
            <p className="cancle">ยกเลิก</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
