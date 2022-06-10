import React from "react";
import "./styles.css";
const Box = ({ data }) => {
  return (
    <div className="box">
      <div className="box-image">
        <img src={data.imgUrl} />
      </div>
      <div className="about-box">
        <h3 className="title">{data.title}</h3>
        <p className="description">{data.description}</p>
      </div>
    </div>
  );
};

export default Box;
