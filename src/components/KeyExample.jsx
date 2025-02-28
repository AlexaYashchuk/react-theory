import { Button } from "antd";
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
