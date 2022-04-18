import React from "react";
import "./index.scss";
import Content from "./content";
import { Link } from "react-router-dom";
function IndexPage() {
  const data = require("../../database/mockup.json");
  const contents = data.map((data, i) => <Content key={i} data={data} />);
  return (
    <div className="indexpage-root">
      <h1 className="title-page">เที่ยวหาธรรม</h1>
      <div className="indexpage-content">{contents}</div>
    </div>
  );
}

export default IndexPage;
