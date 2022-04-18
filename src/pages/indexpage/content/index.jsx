import React from "react";
import "./content.scss";
import { AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
function Content({ data, i }) {
  const navigate = useNavigate();
  const { title, like, comments, body, img_url, id } = data;
  //navigate to content/id

  return (
    <div keys={i} className="content-root">
      <div className="image-section">
        <img src={img_url[0]} alt={img_url[0]} className="img" />
      </div>
      <div className="info-section">
        <div className="body-section">
          <h1 onClick={() => navigate("content/" + id)} className="title">
            {title}
          </h1>
          <p className="body"> {body}</p>
        </div>
        <div className="interaction">
          <div className="button">
            <AiFillHeart style={{ color: "#f8f8f8", fontSize: 50 }} />
            <p>{like}</p>
          </div>
          <div className="button">
            <AiOutlineComment
              style={{ color: "#f8f8f8", fill: "white", fontSize: 50 }}
            />
            <p>{comments}</p>
          </div>
          <div onClick={() => navigate("content/" + id)} className="button">
            <p>อ่านต่อ...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
