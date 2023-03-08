import React, { useState } from "react";
// Hook function 중 하나인 useState(배열을 리턴하는 함수)

export default function Counter() {
  // useState의 네이밍 컨밴션:: [state - 값, setState - 값을 변경할 때 쓰는 함수]

  // +, -, * 연산 - string
  const operators = ["+", "-", "*"];
  const [info, setInfo] = useState({
    count: 0,
    show: true,
    operator: operators[0],
  });
  return (
    <div>
      <button
        onClick={() => {
          let result;
          if (info.operator === "+") {
            result = info.count + 1;
          }
          if (info.operator === "-") {
            result = info.count - 1;
          }
          if (info.operator === "*") {
            result = info.count * 1;
          }
          //   setCount(result);
          setInfo({ ...info, count: result });
        }}
      >
        {info.operator}1
      </button>
      <button
        onClick={() => {
          setInfo({ ...info, show: !info.show });
        }}
      >
        Show & Hide
      </button>
      <button
        onClick={() => {
          const idx = Math.floor(Math.random() * operators.length);
          // setOperator(operators[idx]);
          setInfo({ ...info, operator: operators[idx] });
        }}
      >
        Change Operator
      </button>
      <br />
      {info.show && `Counter: ${info.count}`}
    </div>
  );
}
