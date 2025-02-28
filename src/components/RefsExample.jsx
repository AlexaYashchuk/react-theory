import { useRef } from "react";
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
    <div className="example">
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
