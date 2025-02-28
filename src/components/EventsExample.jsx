import { Button } from "antd";
import { useState } from "react";
import "../styles/Example.css";

const EventsExample = ({ name }) => {
  const [visible, setvisible] = useState(false);

  const getName = () => {
    setvisible(!visible);
  };

  return (
    <div className="example">
      <Button className="items" onClick={getName}>
        {visible == true ? `Скрыть имя` : `Получить имя`}
      </Button>
      {visible == true && <p>{name}</p>}
    </div>
  );
};

export { EventsExample };
