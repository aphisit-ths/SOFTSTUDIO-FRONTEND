import React from "react";
import "./contentpage.scss";
import { AiFillHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
function ContentPage() {
  const params = useParams();
  const { id } = params;
  const data = require("../../database/mockup.json");
  const { title, like, comments, body, img_url, tags, location } = data[id - 1];
  const count_img = img_url.length === 1;
  const preview_image = img_url.map((img_url, idx) => (
    <div key={idx} className={count_img ? "one-image" : "images"}>
      <img src={img_url} alt={img_url} />
    </div>
  ));
  return (
    <div className="contentpage-root">
      <div className="middle-section">
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
      </div>
      <div className="like-section">
        <div className="like">
          <AiFillHeart style={{ fontSize: 50 }} />
          {like}
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
