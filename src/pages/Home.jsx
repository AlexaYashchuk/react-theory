import React from "react";
import "../App.css";
import roadMap from "../assets/react.webp";

const Home = () => {
  return (
    <div className="content">
      <h1>Roadmap REACT</h1>
      <img src={roadMap} />
    </div>
  );
};

export { Home };
