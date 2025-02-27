import React from "react";
import { Link } from "react-router-dom";
import { WarningOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Components = () => {
  return (
    <div className="content">
      <h1>Components</h1>
      <div className="text-block-important">
        <WarningOutlined className="warning-icon" />
        <b>Компоненты</b> - это небольшие, переиспользуемые элементы
        пользовательского интерфейса, которые объединены вместе, чтобы создать
        более крупные приложения.
      </div>

      <p className="text-block">
        Во многом компоненты ведут себя как
        <b> обычные функции JavaScrip!</b> Они принимают произвольные входные
        данные
        <Link to="/props">
          <Button className="link-in-text">Props</Button>
        </Link>
        и возвращают React-элементы, описывающие, что мы хотим увидеть на
        экране. React- компоненты могут быть: <b>Функциональные</b> и
        <b> Классовые.</b>
      </p>
      <h2>Пример объявления функциональной компоненты</h2>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`function MyComp() {
              return <h1>Привет, мир!</h1>;
            }
            export {MyComp}`}
          </code>
        </pre>
      </div>
      <h2>Пример объявления классовой компоненты</h2>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`class MyComp extends React.Component {
            render() {
            return <h1>Привет, мир!</h1>;
              }
            };
            export {MyComp}`}
          </code>
        </pre>
      </div>
      <p className="text-block-important">
        <WarningOutlined className="warning-icon" />
        Сейчас для объявления компонент используется функциональный подход.
      </p>
      <p className="text-block">
        Компонента должна себя вести как чистая функция. <b>"Чистой"</b>{" "}
        называется функция, которая:
      </p>
      <ul className="list">
        <li>Для одинаковых входных данных всегда возвращает один результат.</li>
        <li>
          Не имеет побочных эффектов (то есть не изменяет внешние состояния).
        </li>
        <li>Не зависит от внешних состояний.</li>
      </ul>
    </div>
  );
};
export { Components };
