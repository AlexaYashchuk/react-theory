import { Link } from "react-router-dom";
import { Button } from "antd";
import "../styles/NavPanel.css";
import "../App.css";

const NavPanel = () => {
  return (
    <div className="navPanel">
      <Link to="/virtualDom">
        <Button color="primary" variant="filled">
          VirtualDOM
        </Button>
      </Link>
      <Link to="/components">
        <Button color="primary" variant="filled">
          Components
        </Button>
      </Link>
      <Link to="/props">
        <Button color="primary" variant="filled">
          Props
        </Button>
      </Link>
      <Link to="/state">
        <Button color="primary" variant="filled">
          State (useState)
        </Button>
      </Link>
      <Link to="/lifeCycle">
        <Button color="primary" variant="filled">
          LifeCycle (useEffect)
        </Button>
      </Link>
      <Link to="/events">
        <Button color="primary" variant="filled">
          Events
        </Button>
      </Link>
      <Link to="/refs-fragment-key-reactMemo-useMemo">
        <Button color="primary" variant="filled">
          Refs, Fragment, Key...
        </Button>
      </Link>
      <Link to="/context">
        <Button color="primary" variant="filled">
          Context (useContext)
        </Button>
      </Link>
      <Link to="/react-hook-form-VS-formik">
        <Button color="primary" variant="filled">
          Формы в React
        </Button>
      </Link>
      <Link to="/local-storage-session-storage-local-forage">
        <Button color="primary" variant="filled">
          Storages
        </Button>
      </Link>
      <Link to="/higher-Order-Components">
        <Button color="primary" variant="filled">
          HOC
        </Button>
      </Link>
      <Link to="/router">
        <Button color="primary" variant="filled">
          Router
        </Button>
      </Link>
    </div>
  );
};

export { NavPanel };
