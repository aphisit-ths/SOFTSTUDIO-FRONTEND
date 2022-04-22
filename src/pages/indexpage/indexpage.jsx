import React, { useEffect } from "react";
import "./index.scss";
import Content from "./content";
import axios from "axios";
import { motionVariants } from "../../utils/motion_variant";
import { motion } from "framer-motion";
function IndexPage() {
  const data = require("../../database/mockup.json");

  const contents = data.map((data, i) => <Content data={data} idx={i} />);
  useEffect(() => {
    async function getAllCountry() {
      try {
        const res = await axios.get("https://localhost:5001/api/Contents");
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllCountry();
  }, []);
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
