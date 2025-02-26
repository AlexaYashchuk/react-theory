import React from "react";
import { Link } from "react-router-dom";

const Components = () => {
  return (
    <div className="content">
      <h1 className="content-title">Components</h1>
      <p className="text-block">
        Компоненты - это небольшие, переиспользуемые элементы пользовательского
        интерфейса, которые объединены вместе, чтобы создать более крупные
        приложения.
      </p>
      <p className="text-block">
        Во многом компоненты ведут себя как
        <b> обычные функции JavaScrip!</b> Они принимают произвольные входные
        данные
        <Link to="/props"> (ПРОПСЫ)</Link> и возвращают React-элементы,
        описывающие, что мы хотим увидеть на экране.
      </p>
      <h2>Компоненты бывают ФУНКЦИОНАЛЬНЫЕ и КЛАССОВЫЕ</h2>
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
    </div>
  );
};
export { Components };
