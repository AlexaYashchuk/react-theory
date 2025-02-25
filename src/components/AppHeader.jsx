import React from "react";
import reactLogo from "../assets/react.svg";
import { HomeOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="header">
      <Link to="/">
        <HomeOutlined className="home-icon" />
      </Link>
      <h1>REACT</h1>
      <img src={reactLogo} className="logo react" alt="React logo" />
    </Header>
  );
};

export { AppHeader };
