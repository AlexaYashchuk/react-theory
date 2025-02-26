import { WarningOutlined } from "@ant-design/icons";

const VirtualDOM = () => {
  return (
    <div className="content">
      <h1 className="content-title">Что такое DOM?</h1>
      <p className="text-block">
        DOM - это сокращение от "Document Object Model" (объектная модель
        документа).
      </p>
      <p className="text-block">
        Когда ты открываешь веб-страницу в браузере, браузер создает структуру
        документа, которую можно представить в виде дерева элементов. DOM
        позволяет нам манипулировать этой структурой, изменять содержимое,
        стили, добавлять и удалять элементы.
      </p>
      <p className="text-block">
        Если мы имеем дело с большим REACT-приложением с множеством элементов и
        компонентов, то КАЖДЫЙ РАЗ, КОГДА ПРОИСХОДИТ ИЗМЕНЕНИЕ данных в
        приложении, REACT должен обновить DOM, чтобы отобразить эти изменения на
        странице.
      </p>
      <p className="text-block-important">
        <WarningOutlined className="warning-icon" />
        Но вместо того, чтобы непосредственно вносить изменения в реальный DOM,
        React использует виртуальный DOM.
      </p>
    </div>
  );
};
export { VirtualDOM };
