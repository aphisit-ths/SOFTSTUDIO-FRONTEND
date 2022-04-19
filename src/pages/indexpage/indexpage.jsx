import React from "react";
import "./index.scss";
import Content from "./content";
import { motionVariants } from "../../utils/motion_variant";
import { motion } from "framer-motion";
function IndexPage() {
  const data = require("../../database/mockup.json");
  const contents = data.map((data, i) => <Content key={i} data={data} />);
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1.5, ease: "easeIn" }}
      className="indexpage-root"
    >
      <h1 className="title-page">เที่ยวหาธรรม</h1>
      <div className="indexpage-content">{contents}</div>
    </motion.div>
  );
}

export default IndexPage;
