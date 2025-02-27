import React from "react";
import "../App.css";
import roadMap from "../assets/Roadmap.jpg";

const Home = () => {
  return (
    <div className="content">
      <h1>Roadmap REACT</h1>
      <img src={roadMap} className="content-img" />
    </div>
  );
};

export { Home };
