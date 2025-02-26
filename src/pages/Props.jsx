import { WarningOutlined } from "@ant-design/icons";

const Props = () => {
  return (
    <div className="content">
      <h1 className="content-title">Что такое пропсы?</h1>
      <p className="text-block">
        <b>Пропсы (сокращение от properties)</b> - это данные, которые
        передаются в компоненты React для настройки их поведения и внешнего
        вида. Они позволяют передавать информацию из родительского компонента в
        дочерний компонент.
      </p>
      <h2>Передача пропсов компонентам (функциональные компоненты)</h2>
      <p className="text-block">
        В функциональных компонентах пропсы доступны как параметр функции
        компонента
      </p>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`// Родительский компонент
const ParentComp = () => {
  const message = "Привет";
  return <ChildComp message={message} />;
}

// Дочерний компонент
const ChildComp = (props) => {
  return <div>{props.message}</div>;
}
// либо сразу сделать деструктуризацию, ведь props это обычный объект
const ChildComp = ({message}) => {
  return <div>{message}</div>;
}`}
          </code>
        </pre>
      </div>
      <h2>Передача пропсов компонентам (классовые компоненты)</h2>
      <p className="text-block">
        В классовых компонентах пропсы доступны через this.props. Например,
        this.props.message.
      </p>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`// Дочерний компонент
  class ChildComp extends React.Component{
  render(){
    return (
      <div>
        {this.props.message}
      </div>
    );
  }
}`}
          </code>
        </pre>
      </div>
      <p className="text-block-important">
        <WarningOutlined className="warning-icon" />
        <b>Props </b>можно использовать для передачи любых данных, включая
        строки, числа, массивы, объекты и функции + они являются неизменяемыми
        (immutable), их нельзя изменять напрямую.
      </p>
    </div>
  );
};
export { Props };
