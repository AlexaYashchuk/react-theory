import { WarningOutlined } from "@ant-design/icons";
import { EventsExample } from "../components/EventsExample";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Events = () => {
  return (
    <div className="content">
      <h1>Обработка событий (Events)</h1>
      <p className="text-block">
        Когда мы вводим данные в интерфейс, нажимаем на счетчик или прокручиваем
        страницу с помощью мыши —{" "}
        <b>каждое из этих действий представляет собой событие,</b> для обработки
        которого необходим специальный обработчик.
      </p>
      <h2>Общий список поддерживаемых событий:</h2>
      <ul className="list">
        <li>Буфер обмена: onCopy, onCut, onPaste</li>
        <li>
          Составление/ввод данных: onCompositionEnd, onCompositionStart,
          onCompositionUpdate
        </li>
        <li>Клавиатура: onKeyDown, onKeyPress, onKeyUp</li>
        <li>Фокусировка: onFocus, onBlur</li>
        <li>Форма: onChange, onInput, onSubmit</li>
        <li>
          Мышь: onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd,
          onDragEnter, onDragExit, onDragLeave, onDragOver, onDragStart, onDrop,
          onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseOut,
          onMouseOver, onMouseUp
        </li>
        <li>Выделение: onSelect</li>
        <li>Касание: onTouchCancel, onTouchEnd, onTouchMove, onTouchStart</li>
        <li>UI: onScroll</li>
        <li>Колёсико мышки: onWheel</li>
        <li>
          Медиа: onAbort, onCanPlay, onCanPlayThrough, onDurationChange,
          onEmptied, onEncrypted, onEnded, onError, onLoadedData,
          onLoadedMetadata, onLoadStart, onPause, onPlay, onPlaying, onProgress,
          onRateChange, onSeeked, onSeeking, onStalled, onSuspend, onTimeUpdate,
          onVolumeChange, onWaiting
        </li>
        <li>Изображение: onLoad, onError</li>
        <li>
          Анимация: onAnimationStart, onAnimationEnd, onAnimationIteration
        </li>
        <li>Переход: onTransitionEnd</li>
      </ul>
      <h2>Разница между event.target.value и event.currentTarget.value?</h2>
      <div className="text-block-important">
        <WarningOutlined className="warning-icon" />
        <ul>
          <li>
            <b>event.target</b> — это элемент, на который пользователь
            действительно нажал или взаимодействовал. Например, если вы кликнули
            на кнопку внутри формы, event.target будет ссылаться именно на эту
            кнопку.
          </li>
          <li>
            <b>event.currentTarget</b>— это элемент, на который вы повесили
            обработчик события. Если у вас есть обработчик события, например, на
            всей форме, то event.currentTarget будет ссылаться на эту форму,
            даже если событие произошло на кнопке внутри нее.
          </li>
        </ul>
        <b>
          Разница в том, что event.target показывает конкретный элемент, с
          которым пользователь взаимодействует, а event.currentTarget показывает
          элемент, на который назначен обработчик события.
        </b>
      </div>
      <div className="code-block">
        <p>
          Рассмотрим пример обработки события OnClick. В качестве{" "}
          <Link to="/props">
            <Button className="link-in-text">Props</Button>
          </Link>{" "}
          мы передаем имя, и при нажатии на кнопку отображаем/скрываем его,
          используя хук
          <Link to="/state">
            <Button className="link-in-text">UseState</Button>
          </Link>{" "}
        </p>
        <pre>
          <code className="codeText">
            {`import { Button } from "antd";
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
        {visible == true ? "Скрыть имя" : "Получить имя"}
      </Button>
      {visible == true && <p>{name}</p>}
    </div>
  );
};

export { EventsExample };
`}
          </code>
        </pre>
      </div>
      <EventsExample name={`Alexandra`} />
    </div>
  );
};
export { Events };
