import React from "react";
import Navbar from "../Navbar/Navbar";
import "./styles.css";
import Box from "../Box/Box";
const Home = () => {
  const boxes = [
    {
      imgUrl: "https://files.codingninjas.in/cc_march-1-03-17099.png",
      title: "Ninjas Career Camp Freshers Java July'22",
      description:
        "You can appear for the test from 30th May, from 12 AM onwards."
    },
    {
      imgUrl:
        "https://files.codingninjas.in/roadmap-to-crack-summer-internships-02-17240.png",
      title: "Roadmap to Crack Summer Internships",
      description:
        "Give your career a head-start and know how you can get closer to your dream job."
    },
    {
      imgUrl: "https://files.codingninjas.in/codejutsu-02-17237.png",
      title: "Codejutsu | Coding Club, NIT Silchar",
      description:
        "Run through the wave of codes smoothly and showcase your coding skills to stay ahead amongst your peers."
    }
  ];
  return (
    <div data-testid="home-div">
      <Navbar data-testid="navbar" />
      <div data-testid="boxes" className="boxes">
        {boxes.map((box, index) => (
          <Box data-testid="box" key={index} data={box} />
        ))}
      </div>
    </div>
  );
};

export default Home;
