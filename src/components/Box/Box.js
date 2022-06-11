import React from "react";
import "./styles.css";
const Box = ({ data }) => {
  return (
    <div data-testid="box" className="box">
      <div className="box-image">
        <img data-testid="box-img" src={data.imgUrl} />
      </div>
      <div className="about-box">
        <h3 data-testid="box-title" className="title">
          {data.title}
        </h3>
        <p data-testid="box-description" className="description">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Box;
