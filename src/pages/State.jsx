import { WarningOutlined } from "@ant-design/icons";
import { UseStateExample } from "../components/UseStateExample";

const State = () => {
  return (
    <div className="content">
      <h1>State (useState)</h1>
      <h2>Что такое state?</h2>
      <p className="text-block">
        <b>State (состояние)</b> -данные, которые используются внутри компонента
        для отслеживания и обновления информации. Состояние позволяет
        компонентам быть динамиными и реагировать на изменения.
        <b>
          Состояние -это то, что ИЗМЕНЯЕТСЯ в компоненте, в отличие от
          НЕИЗМЕННЫХ ПРОПСОВ.
        </b>
      </p>
      <h2>Что такое и для чего useState? </h2>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`import React, { useState } from 'react';
const [state, setState] = useState(initialState);`}
          </code>
        </pre>
      </div>
      <div className="text-block-important">
        <WarningOutlined className="warning-icon" />
        <b>useState</b> - это хук{" "}
        <i>
          (специальная функция, которая позволяет "подключаться" к возможностям
          React из функциональных компонентов.){" "}
        </i>
        , который позволяет использовать <b>state </b>функциональным компонентам
        и отслеживать его.
        <ul>
          <li>
            <b>State:</b> текущее значение состояния.
          </li>
          <li>
            <b>SetState:</b> функция для оновления значение состояния.
          </li>
          <li>
            <b>initialState (необязательный):</b> начальное значение состояния.
            Может быть примитивным типом данных, объектом или функцией.
          </li>
        </ul>
        <b>useState </b> возвращает массив с парой значений: [state,setState]
      </div>
      <h2>
        Код компоненты с использованием useState и 3 варианта реализации
        приведены ниже
      </h2>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`import { useState } from "react";
import { Button, Input } from "antd";
import "../styles/useStateExample.css";

const UseStateExample = () => {
  //пример со счетчиком
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  //пример с показать/скрыть
  const [showText, setShowText] = useState(true);

  const show = () => {
    setShowText(!showText);
  };
  //пример с input
  const [text, setText] = useState("");

  const changeText = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="useStateExample">
        <Button className="items" onClick={increment}>
          +1
        </Button>
        Значение счетчика: {count}
        <Button className="items" onClick={decrement}>
          -1
        </Button>
      </div>
      <div className="useStateExample">
        <Button className="items" onClick={show}>
          Показать скрыть
        </Button>
        {showText && <p>Это текст</p>}
      </div>
      <div className="useStateExample">
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
`}
          </code>
        </pre>
      </div>
      <UseStateExample />
      <div className="text-block-important">
        <WarningOutlined className="warning-icon" />
        <b>State можно передавать в дочерние компоненты при помощи props.</b>
      </div>
      <h2>Функция-setter (например setState) - асинхронная операция</h2>
      <div className="text-block-important">
        <WarningOutlined className="warning-icon" />
        <b> Что позволяет ассинхронное поведение сеттеров?</b>
        <ul>
          <li>
            Объединять несколько обновлений состояния в одно, что уменьшает
            количество рендеров и улучшает производительность.
          </li>
          <li>
            Гарантия, что компоненты рендерятся с наиболее актуальным
            состоянием.
          </li>
        </ul>
      </div>
    </div>
  );
};
export { State };
