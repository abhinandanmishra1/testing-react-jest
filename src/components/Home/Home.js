import React from "react";
import Navbar from "../Navbar/Navbar";
import "./styles.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="boxes">
        <div className="box">
          <div className="box-image">
            <img src="https://files.codingninjas.in/cc_march-1-03-17099.png" />
          </div>
          <div className="about-box">
            <h3 className="title">This is a box</h3>
            <p className="description">Hey I'm the description of this box</p>
          </div>
        </div>

        <div className="box">
          <div className="box-image">
            <img src="https://files.codingninjas.in/cc_march-1-03-17099.png" />
          </div>
          <div className="about-box">
            <h3 className="title">This is a box</h3>
            <p className="description">Hey I'm the description of this box</p>
          </div>
        </div>

        <div className="box">
          <div className="box-image">
            <img src="https://files.codingninjas.in/cc_march-1-03-17099.png" />
          </div>
          <div className="about-box">
            <h3 className="title">This is a box</h3>
            <p className="description">Hey I'm the description of this box</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
