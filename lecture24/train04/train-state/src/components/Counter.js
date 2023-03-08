import React, { useState } from "react";
// Hook function 중 하나인 useState(배열을 리턴하는 함수)

export default function Counter() {
  // useState의 네이밍 컨밴션:: [state - 값, setState - 값을 변경할 때 쓰는 함수]
  const [count, setCount] = useState(0);
  //show and hide - boolean으로
  const [show, setShow] = useState(true);
  // +, -, * 연산 - string
  const operators = ["+", "-", "*"];
  const [operator, setOperator] = useState(operators[0]);
  return (
    <div>
      <button
        onClick={() => {
          let result;
          if (operator === "+") {
            result = count + 1;
          }
          if (operator === "-") {
            result = count - 1;
          }
          if (operator === "*") {
            result = count * 1;
          }
          setCount(result);
        }}
      >
        {operator}1
      </button>
      <button onClick={() => setShow(!show)}>Show & Hide</button>
      <button
        onClick={() => {
          const idx = Math.floor(Math.random() * operators.length);
          setOperator(operators[idx]);
        }}
      >
        Change Operator
      </button>
      <br />
      {show && `Counter: ${count}`}
    </div>
  );
}
