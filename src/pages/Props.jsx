const Props = () => {
  return (
    <div className="content">
      <h1 className="content-title">Props</h1>
      <p className="text-block">
        Пропсы (сокращение от properties) - это данные, которые передаются в
        компоненты React для настройки их поведения и внешнего вида. Они
        позволяют передавать информацию из родительского компонента в дочерний
        компонент.
      </p>
      <h2>Передача пропсов компонентам</h2>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`// Родительский компонент
const ParentComponent = () => {
  const message = "Привет, Redev!";
  return <ChildComponent message={message} />;
}

// Дочерний компонент
const ChildComponent = (props) => {
  return <div>{props.message}</div>;
}`}
          </code>
        </pre>
      </div>
    </div>
  );
};
export { Props };
