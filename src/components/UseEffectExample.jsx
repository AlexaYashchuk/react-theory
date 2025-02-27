import { useState, useEffect } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const counter = () => {
    setCount(count + 1);
  };
  console.log(count);

  return (
    <>
      <button onClick={counter}>+1</button>
    </>
  );
};

export { UseEffectExample };
