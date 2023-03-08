import React, { useState } from "react";
// Hook function 중 하나인 useState(배열을 리턴하는 함수)

export default function Counter() {
  // useState의 네이밍 컨밴션:: [state - 값, setState - 값을 변경할 때 쓰는 함수]
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <br />
      Counter: {count}
    </div>
  );
}
