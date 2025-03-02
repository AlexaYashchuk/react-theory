import React from "react";
import reactLogo from "../assets/react.svg";
import { HomeOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useContext } from "react";
import { ContextTheme } from "../context/ContextTheme";

const { Header } = Layout;

const AppHeader = () => {
  const { dark, toggleTheme } = useContext(ContextTheme);

  return (
    <Header className="header">
      <Link to="/react-theory">
        <HomeOutlined className="home-icon" />
      </Link>
      <h1>Теория по библиотеке React</h1>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <label className="switch">
        <input
          className="switch__input"
          type="checkbox"
          checked={dark}
          onChange={toggleTheme}
        />
        <span className="switch__slider"></span>
      </label>
    </Header>
  );
};

export { AppHeader };
