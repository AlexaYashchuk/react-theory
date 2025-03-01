import { WarningOutlined } from "@ant-design/icons";

const Context = () => {
  return (
    <div className="content">
      <h1>Context</h1>
      <h2>Что такое Context?</h2>
      <div className="text-block-important">
        <WarningOutlined className="warning-icon" />
        <b> Context </b> способ передачи данных через дерево компонентов без
        явной передачи пропсов от родительских компонентов к дочерним. Это
        особенно полезно, когда необходимо передать данные глубоко в иерархии
        компонентов, избегая "просачивания" пропсов через несколько
        промежуточных компонентов.
      </div>
      <h2>Алгорит работы с Context</h2>
      <h3>1. Cоздание контекста</h3>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`import React from "react";

const ContextTheme = React.createContext();

export { ContextTheme };
`}
          </code>
        </pre>
      </div>
      <h3>
        2. Предоставление значения контекста внутри КОМПОНЕНТА-ПРОВАЙДЕРА.
      </h3>
      <p className="text-block">
        В этом примере используется MyContext.Provider для предоставления
        значения контекста. Значение value будет доступно всем дочерним
        компонентам, которые подписаны на этот контекст.
      </p>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`import React, { useState } from "react";
import { ContextTheme } from "./ContextTheme";

const ProviderTheme = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark((dark) => !dark);
  };

  const contextValue = {
    dark,
    toggleTheme,
  };

  return (
    <ContextTheme.Provider value={contextValue}>
      {children}
    </ContextTheme.Provider>
  );
};

export { ProviderTheme };
`}
          </code>
        </pre>
      </div>
      <h3>3. Использование хука useContext</h3>
      <div className="text-block-important">
        <WarningOutlined className="warning-icon" />
        <b> useContext() </b> - всегда ищет ближайшего провайдера над
        компонентом, который его вызывает. Он ищет вверх и не учитывает
        провайдеров в компоненте, из которого вы вызываете useContext().
      </div>
      <p className="text-block">
        Исходя из этого создаётся вышестоящая компонента
      </p>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`import React from "react";
import { ProviderTheme } from "./context/ProviderTheme";
import { App } from "./App";

const AppMain = () => {
  return (
    <>
      <ProviderTheme>
        <App />
      </ProviderTheme>
    </>
  );
};

export default AppMain;
`}
          </code>
        </pre>
      </div>
      <p className="text-block">
        И после в компоненте APP мы получачем полный доступ к контексту.
        Простенький переключатель темы реализован тут.
      </p>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`//компонента App.jsx
            ....
import { useContext } from "react";
import { ContextTheme } from "./context/ContextTheme";

function App() {
....
....
  const { dark, toggleTheme } = useContext(ContextTheme);
  
  return (
      <>
      <label className="switch">
        <input
          className="switch__input"
          type="checkbox"
          checked={dark}
          onChange={toggleTheme}
        />
        <span className="switch__slider"></span>
      </label>
      
      </>
  )
}`}
          </code>
        </pre>
      </div>
    </div>
  );
};
export { Context };
