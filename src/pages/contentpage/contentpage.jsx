import React, { useEffect } from "react";
import "./contentpage.scss";
import { AiFillHeart } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Comment from "./comment/comment";
import { motion } from "framer-motion";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_CONTENT_BY_ID = gql`
  query GetContentById($contentId: Int!) {
    getContentById(contentId: $contentId) {
      contentId
      title
      description
      location
      imageURL
      tag
    }
  }
`;
function ContentPage() {
  const params = useParams();
  const id = params.id;

  const { data, loading, error } = useQuery(GET_CONTENT_BY_ID, {
    variables: { contentId: parseInt(id) },
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
  // const count_img = imageURL.length === 1;
  // const preview_image = imageURL.map((imageURL, idx) => (
  //   <div key={idx} className="one-image">
  //     <img src={imageURL} alt={imageURL} />
  //   </div>
  // ));
  const like = Math.floor(Math.random() * 100);
  // const comment_elements = comments.map((comments, i, rand) => (
  //   <Comment comment={comments} idx={i} rand={rand}></Comment>
  // ));

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
            <p className="tags"> หมวดหมู่ : {tag.map((tag) => `${tag}, `)}</p>
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
        {/* {comment_elements} */}
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
