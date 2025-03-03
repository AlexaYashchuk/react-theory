import { useState } from "react";
import { Button, Input } from "antd";
import "../styles/Example.css";

const UseStateExample = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const [showText, setShowText] = useState(true);

  const show = () => {
    setShowText(!showText);
  };

  const [text, setText] = useState("");

  const changeText = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="example">
        <Button className="items" onClick={increment}>
          +1
        </Button>
        Значение счетчика: {count}
        <Button className="items" onClick={decrement}>
          -1
        </Button>
      </div>
      <div className="example">
        <Button className="items" onClick={show}>
          Показать скрыть
        </Button>
        {showText && <p>Это текст</p>}
      </div>
      <div className="example">
        <Input
          type="text"
          placeholder="Введите текст"
          value={text}
          onChange={changeText}
        />
        <p>Текст, который вводим в input: {text}</p>
      </div>
    </>
  );
};

export { UseStateExample };
