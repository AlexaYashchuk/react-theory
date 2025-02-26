import { Link } from "react-router-dom";
import { Button } from "antd";
import "../styles/NavPanel.css";
import "../App.css";

const NavPanel = () => {
  return (
    <div className="divPanel">
      <Link to="/virtualDom">
        <Button color="danger" variant="outlined">
          VirtualDOM
        </Button>
      </Link>
      <Link to="/components">
        <Button color="danger" variant="outlined">
          Components
        </Button>
      </Link>
      <Link to="/props">
        <Button color="danger" variant="outlined">
          Props
        </Button>
      </Link>
      <Link to="/state">
        <Button color="danger" variant="outlined">
          State (useState)
        </Button>
      </Link>
      <Link to="/lifeCycle">
        <Button color="danger" variant="outlined">
          LifeCycle (useEffect)
        </Button>
      </Link>
      <Link to="/events">
        <Button color="danger" variant="outlined">
          Events
        </Button>
      </Link>
      <Link to="/refs-fragment-key-reactMemo-useMemo">
        <Button color="danger" variant="outlined">
          Refs, Fragment, Key...
        </Button>
      </Link>
      <Link to="/context">
        <Button color="danger" variant="outlined">
          Context (useContext)
        </Button>
      </Link>
      <Link to="/react-hook-form-VS-formik">
        <Button color="danger" variant="outlined">
          Формы в React
        </Button>
      </Link>
      <Link to="/local-storage-session-storage-local-forage">
        <Button color="danger" variant="outlined">
          Storages
        </Button>
      </Link>
      <Link to="/higher-Order-Components">
        <Button color="danger" variant="outlined">
          HOC
        </Button>
      </Link>
      <Link to="/router">
        <Button color="danger" variant="outlined">
          Router
        </Button>
      </Link>
    </div>
  );
};

export { NavPanel };
