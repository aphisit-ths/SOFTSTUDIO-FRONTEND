import React, { useEffect } from "react";
import "./index.scss";
import Content from "./content";
import axios from "axios";
import { motionVariants } from "../../utils/motion_variant";
import { motion } from "framer-motion";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_CONTNETS = gql`
  query GET_CONTNETS {
    contents {
      contentId
      title
      description
      imageURL
      location
      tag
      commentList
      contentStatus
    }
  }
`;
function IndexPage() {
  const { data, loading, error } = useQuery(GET_CONTNETS);
  if (loading) return <p>loading</p>;
  if (error) return <p>error : {console.log(error)}</p>;

  const allContents = data.contents;
  const contents = allContents.map((allContents, i) => (
    <Content data={allContents} idx={i} />
  ));
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: 600 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="indexpage-root"
    >
      <h1 className="title-page">เที่ยวหาธรรม</h1>
      <div className="indexpage-content">{contents}</div>
    </motion.div>
  );
}

export default IndexPage;
