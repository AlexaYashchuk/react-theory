import { WarningOutlined } from "@ant-design/icons";

const LifeCycle = () => {
  return (
    <div className="content">
      <h1>LifeCycle (useEffect)</h1>
      <div className="text-block-important">
        <WarningOutlined className="warning-icon" />
        <b>LifeCycle = жизненный цикл</b> в React - это набор этапов, через
        которые компонент проходит, чтобы правильно работать на странице. Методы
        жизненного цикла в React делятся на:
        <ol>
          <li>
            Методы монтирования
            <ul>
              <li>constructor()</li>
              <li>render()</li>
              <li>
                <b>ComponentDidMount()</b> (вызывается сразу после рендера)
              </li>
            </ul>
          </li>
          <li>
            Методы обновления
            <ul>
              <li>render()</li>
              <li>
                <b>ComponentDidUpdate()</b> (вызывается при каждом ререндере)
              </li>
            </ul>
          </li>
          <li>
            Методы размонтирования
            <ul>
              <li>
                <b>ComponentWillUnmount()</b> (вызывается перед
                размонтированием)
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`// constructor()
constructor(props) {
super(props);
this.state = { counter: 0 };
this.handleClick = this.handleClick.bind(this);
}

// ComponentDidUpdate()
//В качестве парапметров передаются старые значения объектов: props и state.
componentDidUpdate(prevProps, prevState) {
if (this.props.userID !== prevProps.userID) {
this.fetchData(this.props.userID);
}
  }`}
          </code>
        </pre>
      </div>
      <h2>Жизненный цикл функциональных компонентов (useEffect)</h2>
      <div className="text-block-important">
        <WarningOutlined className="warning-icon" />
        <b>UseEffect</b> - это хук в React, предназначенный для работы с
        методами жизненного цикла в функциональных компонентах. ОДИН ТАКОЙ ХУК
        заменяет ОСНОВНЫЕ методы жизненного цикла.
      </div>
      <div className="code-block">
        <p>
          1. Принимает в качестве параметра функцию, и пустой массив
          зависимостей [ ]. Аналог ComponentDidMount()
        </p>
        <pre>
          <code className="codeText">{`useEffect ( () => { }, [])`}</code>
        </pre>
        <p>
          2. Принимает в качестве параметра функцию, и массив зависимостей [ ].
          Аналог ComponentDidUpdate()
        </p>
        <pre>
          <code className="codeText">{`useEffect ( () => { }, [age])`}</code>
        </pre>
        <p>
          3. Принимает в качестве параметра функцию (Второго параметра нет).
          Аналог ComponentDidUpdate() + ComponentDidMount()
        </p>
        <pre>
          <code className="codeText">{`useEffect ( () => { })`}</code>
        </pre>
        <p>
          4. Принимает в качестве параметра функцию, которая возвращает другую
          функцию. Аналог ComponentWillUnmount()
        </p>
        <pre>
          <code className="codeText">{`  useEffect ( () => {
  return () => {};
  })`}</code>
        </pre>
      </div>
    </div>
  );
};

export { LifeCycle };
