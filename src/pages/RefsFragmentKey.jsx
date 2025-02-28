import { RefsExample } from "../components/RefsExample";
import { KeyExample } from "../components/KeyExample";
import { Link } from "react-router-dom";
import { WarningOutlined } from "@ant-design/icons";
import { Button } from "antd";

const RefsFragmentKey = () => {
  return (
    <div className="content">
      <h2>Refs</h2>
      <p className="text-block">
        <b>Refs (ссылки)</b> предоставляет способ доступа к DOM-узлам или
        React-элементам, созданным в методе render().
      </p>
      <ul className="list">
        <li>
          Управление фокусом, выделение текста. (
          <b>Лучший вариант использования</b>)
        </li>
        <li>Выполнение анимаций.</li>
        <li>Интеграция со сторонними библиотеками, взаимодействующие с DOM.</li>
      </ul>
      <div className="code-block">
        <p>
          Рассмотрим пример работы фокуса при наведение на поле для ввода,
          используя хук UseRef
        </p>
        <pre>
          <code className="codeText">
            {`import { useRef } from "react";
import { Input } from "antd";
import "../styles/Example.css";

const RefsExample = () => {
  const inputRef = useRef(null);

  const mouseEnter = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="exampe">
      <Input
        className="items"
        type="text"
        ref={inputRef}
        onMouseEnter={mouseEnter}
        placeholder="Наведи на меня"
      />
    </div>
  );
};

export { RefsExample };

`}
          </code>
        </pre>
      </div>
      <RefsExample />
      <div className="text-block-important">
        <WarningOutlined className="warning-icon" />
        <b> useRef - хук в React </b>, который позволяет создавать объект рефа.
        Этот объект сохраняет значение между рендерами компонента.{" "}
        <b>
          Когда вы вызываете useRef(), он возвращает объект с единственным
          свойством current.{" "}
        </b>
        Изначально <b>current</b> будет равен <b>null</b>, но после того, как
        реф будет привязан к элементу (например, инпуту), current будет
        указывать на этот элемент.
      </div>
      <h2>Fragment</h2>
      <p className="text-block">
        С помощью фрагментов можно сгруппировать список дочерних элементов без
        добавления дополнительных узлов в DOM. Используем React.Fragment или
        выполняем импорт, чтобы использовать Fragment. Существует сокращенная
        запись, которую не нужно импортировать - но с ней нельзя использовать
        атрибуты, например className.
      </p>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`//пример с полной записью
import { Fragment } from "react";
            
const Test = () => {
      return (
          <Fragment className='test'>
            <h1>Привет</h1>
          </Fragment>
        )
}
//пример с сокращенной 
const Test = () => {
    return (
        <>
            <h1>Привет</h1>
        </>
    )
}
`}
          </code>
        </pre>
      </div>
      <h2>KEY</h2>
      <p className="text-block">
        Ключи помогают React определять, какие элементы были изменены, добавлены
        или удалены. Их необходимо указывать, чтобы React мог сопоставлять
        элементы массива с течением времени. Лучший способ выбрать ключ — это
        использовать строку, которая будет явно отличать элемент списка от его
        соседей. Чаще всего ты будешь использовать ID из твоих данных как ключи.
        Ключи оптимизируют работу с элементами массивов, уменьшают количество
        ненужных удалений и созданий элементов.
      </p>
      <div className="text-block-important">
        <WarningOutlined className="warning-icon" />
        Без key механизм reconciliation сверяет компоненты попарно между текущим
        и новым VDOM. Из-за этого может происходить большое количество лишних
        перерисовок интерфейса, что замедляет работу приложения. Добавляя key,
        мы помогаем механизму reconciliation тем, что с key он сверяет не
        попарно, а ищет компоненты с тем же key (тег / имя компонента при этом
        учитывается) — это уменьшает количество перерисовок интерфейса.
        Обновлены/добавлены будут только те элементы, которые были изменены/не
        встречались в предыдущем дереве.
      </div>

      <h2>Рассмотрим пример: </h2>
      <p className="text-block">
        Передаем в качестве{" "}
        <Link to="/props">
          <Button className="link-in-text">Пропса</Button>
        </Link>{" "}
        массив, выводим сначала значения id и имя. При нажатии на кнопку выводим
        элементы с четными id
      </p>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`import { Button } from "antd";
import { useState } from "react";
import "../styles/Example.css";

const KeyExample = ({ array }) => {
  const result = array.map((item) => (
    <div className="example" key={item.id}>
      <p className="items">id = {item.id}</p>
      {item.name}
    </div>
  ));

  const [arr, setArr] = useState([]);

  const changeArray = () => {
    const filterArr = array.filter((item) => item.id % 2 === 0);
    setArr(filterArr);
  };

  const result2 = arr.map((item) => (
    <div className="example" key={item.id}>
      <p className="items">id = {item.id}</p>
      {item.name}
    </div>
  ));

  return (
    <div className="example">
      <div>{result}</div>
      <Button className="items" onClick={changeArray}>
        Ищем элементы с четными значениями ключа
      </Button>
      <div>{result2}</div>
    </div>
  );
};

export { KeyExample };

`}
          </code>
        </pre>
      </div>
      <KeyExample
        array={[
          { id: 1, name: `Sasha`, age: 29, city: `Minsk` },
          { id: 2, city: `Minsk`, name: `Roma` },
          { id: 3, city: `Minsk`, name: `Svetlana` },
        ]}
      />
      <h2>React.memo</h2>
      <p className="text-block">
        <b>React.memo</b> — это функция высшего порядка (Higher Order Component)
        в библиотеке React, которая оптимизирует производительность
        функциональных компонентов. Она предназначена для предотвращения
        ненужного повторного рендеринга компонента, когда его пропсы и состояние
        не изменились.
      </p>
      <p className="text-block">
        <b>React.memo</b> использует механизм мемоизации, чтобы запоминать
        предыдущий результат рендеринга компонента и сравнивать его с текущими
        пропсами. Если пропсы не изменились,{" "}
        <b>
          React.memo предотвращает повторный рендеринг компонента, возвращая
          сохраненный результат.
        </b>
      </p>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`// Компонент будет перерисовываться только при изменении пропсов
  const MyComp = React.memo((props) => {
  return (
    <div>
      {props.text}
    </div>
  );
});`}
          </code>
        </pre>
      </div>
      <h2>useMemo</h2>
      <p className="text-block">
        <b>React хук useMemo</b> — предназначен для мемоизации вычислений в
        функциональных компонентах. Он позволяет сохранять результат вычислений
        и повторно использовать его, если входные значения (зависимости) не
        изменились. Это может существенно повысить производительность, особенно
        в случаях, когда сложные вычисления выполняются при каждом рендеринге
        компонента.
      </p>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`import { useMemo } from 'react';

const MyComp = ({ data }) => {
  const processedData = useMemo(() => {
    // Вычисления, требующие много времени или ресурсов
    return processData(data);
  }, [data]); // Зависимость - значение пропса "data"
  return (
    <div>
      {processedData}
    </div>
  );
};`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export { RefsFragmentKey };
