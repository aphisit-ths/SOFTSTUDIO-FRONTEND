import React from "react";
import "./content.scss";
import { AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
function Content({ data, i }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, like, comments, body, img_url, id } = data;
  return (
    <div
      keys={i}
      className="content-root"
      onClick={() => navigate("content/" + id)}
    >
      <div className="image-section">
        <img src={img_url[0]} alt={img_url[0]} className="img" />
      </div>
      <div className="info-section">
        <div className="body-section">
          <h1 className="title">{title}</h1>
          <p className="body"> {body}</p>
        </div>
        <div className="interaction">
          <div className="button">
            <AiFillHeart style={{ color: "#f8f8f8", fontSize: 40 }} />
            <p>{like}</p>
          </div>
          <div className="button">
            <AiOutlineComment
              style={{ color: "#f8f8f8", fill: "white", fontSize: 40 }}
            />
            <p>{comments}</p>
          </div>
          <div className="button">
            <p>อ่านต่อ...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
