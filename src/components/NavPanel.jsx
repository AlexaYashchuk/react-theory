import { Link } from "react-router-dom";
import { Button } from "antd";
import "../styles/NavPanel.css";
import "../App.css";

const NavPanel = () => {
  return (
    <div className="divPanel">
      <Link to="/">
        <Button type="primary">Страница о компонентах</Button>
      </Link>
      <Link to="/limkewmdekwlmst">
        <Button type="primary">В разработке</Button>
      </Link>
    </div>
  );
};

export { NavPanel };
