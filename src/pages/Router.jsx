import { WarningOutlined } from "@ant-design/icons";

const Router = () => {
  return (
    <div className="content">
      <h1> React Router V6</h1>
      <div className="text-block-important">
        <WarningOutlined className="warning-icon" />
        <b>Роутинг </b> - обеспечивая навигацию и переходы между различными
        страницами и разделами приложения БЕЗ ПЕРЕЗАГРУЗКИ СТРАНИЦЫ! Вместо
        того, чтобы каждый раз отправлять запрос на сервер и загружать новую
        страницу, роутинг позволяет динамически обновлять только необходимые
        компоненты или данные в соответствии с выбранным маршрутом.
      </div>
      <div className="code-block">
        <p>1. Установка</p>
        <pre>
          <code className="codeText">{`npm install react-router-dom`}</code>
        </pre>
        <p>2. Импорт</p>
        <pre>
          <code className="codeText">{`import { BrowserRouter } from 'react-router-dom';`}</code>
        </pre>
        <p>3. Оборачиваем главную компоненту (точку входа)</p>
        <pre>
          <code className="codeText">{`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppMain from "./AppMain.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AppMain />
    </StrictMode>
  </BrowserRouter>
);
`}</code>
        </pre>
        <p>
          4. Создаем файл где прописываем все роуты (ниже пример как выглядит
          этот файл на данном сайте)
        </p>
        <pre>
          <code className="codeText">{`import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Components } from "./pages/Components";
import { Props } from "./pages/Props";
import { VirtualDOM } from "./pages/VirtualDom";
import { State } from "./pages/State";
import { LifeCycle } from "./pages/LifeCycle";
import { Events } from "./pages/Events";
import { RefsFragmentKey } from "./pages/RefsFragmentKey";
import { Context } from "./pages/Context";
import { Forms } from "./pages/Forms";
import { Storages } from "./pages/Storages";
import { HOC } from "./pages/HOC";
import { Router } from "./pages/Router";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/virtualDom" element={<VirtualDOM />} />
      <Route path="/components" element={<Components />} />
      <Route path="/props" element={<Props />} />
      <Route path="/state" element={<State />} />
      <Route path="/lifeCycle" element={<LifeCycle />} />
      <Route path="/events" element={<Events />} />
      <Route
        path="/refs-fragment-key-reactMemo-useMemo"
        element={<RefsFragmentKey />}
      />
      <Route path="/context" element={<Context />} />
      <Route path="/react-hook-form-VS-formik" element={<Forms />} />
      <Route
        path="/local-storage-session-storage-local-forage"
        element={<Storages />}
      />
      <Route path="/higher-Order-Components" element={<HOC />} />
      <Route path="/router" element={<Router />} />
    </Routes>
  );
};
export { AppRoutes };
`}</code>
        </pre>
        <p>
          5. Используем <b>Link</b> или <b>NavLink</b> для навигации между
          маршрутами в приложении.
        </p>
        <pre>
          <code className="codeText">{`import { Link } from "react-router-dom";
const myComp = () => {
.....
.....
        <Link to="/props">
          <Button className="link-in-text">Пропса</Button>
        </Link>
.....        }`}</code>
        </pre>
      </div>
      <div className="text-block-important">
        <WarningOutlined className="warning-icon" />
        Отличие между <b>Link</b> и <b>NavLink</b> заключается в возможности
        создания активных ссылок с помощью NavLink. NavLink добавляет класс
        "active" к ссылке, когда соответствующий маршрут активен.
      </div>
    </div>
  );
};

export { Router };
