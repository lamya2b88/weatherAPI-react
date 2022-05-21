import React from "react";
import pic from "../assets/day-and-night.png";

const Home = () => {
  return (
    <div className="home">
      <img src={pic} alt="cloud" className="homeIcon" />
      <h1 className="homeTitle">Weather App</h1>
    </div>
  );
};

export default Home;
