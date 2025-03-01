const Storages = () => {
  return (
    <div className="content">
      <h1>Storages</h1>
      <h2>Local Storage</h2>
      <p className="text-block">
        <b>Local Storage</b> - это механизм, который позволяет веб-приложениям
        сохранять данные локально в браузере. Это означает, что данные будут
        сохранены после закрытия браузера и перезагрузки страницы.
      </p>
      <div className="code-block">
        <pre>
          <code className="codeText">
            {`//Записываем строку "Привет!" в LocalStorage с ключом "myData".
  localStorage.setItem('myData', 'Привет!');

  //Получаем данные из LocalStorage
  const myData = localStorage.getItem('myData');
`}
          </code>
        </pre>
      </div>
      <h2>Session Storage</h2>
      <p className="text-block">
        <b>Session Storage</b> - это еще один механизм хранения данных в
        браузере, который работает так же, как и LocalStorage. Однако Session
        Storage имеет ряд отличий от LocalStorage. <b>Session Storage</b>{" "}
        сохраняет данные только на время сеанса браузера. Это означает, что
        данные будут удалены после закрытия браузера или вкладки. Это может быть
        полезно для хранения временных данных, таких как формы, которые не нужно
        сохранять после закрытия браузера. Кроме того, <b>Session Storage</b>{" "}
        имеет более ограниченный объем хранения данных, чем LocalStorage. Это
        означает, что он может быть полезен для хранения небольших объемов
        данных, которые нужно сохранить только на время сеанса браузера.
        <b>СИНТАКСИС ТАКОЙ ЖЕ КАК И У LocalStorage</b>
      </p>
    </div>
  );
};

export { Storages };
