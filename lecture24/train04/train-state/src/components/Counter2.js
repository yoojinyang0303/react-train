import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(1);

  const add = () => setNumber((number) => number + 1);
  const subtract = () => setNumber((number) => number - 1);
  const multiplyBy2 = () => setNumber((number) => number * 2);

  // Object.asssign({ number, number : number * 2, number : numbeer + 1 }) 과 같은 동작을 수행
  // 아래의 코드를 원래 의도대로 동작하기 위해서는 setState()함수의 비동기적 실행을 방지해야하는데,
  //   setState()함수의 비동기적 실행으로 발생하는 문제점을 방지하기 위해 위의 세 코드에서 number를 setState()함수에서 함수로 전달함으로써 방지할 수 있다.
  const multiplyBy2AndAddBy1 = () => {
    multiplyBy2();
    add();
  };

  return (
    <div>
      <h1>Number : {number}</h1>
      <div>
        <button onClick={add}>+ 1</button>
        <button onClick={subtract}>- 1</button>
        <button onClick={multiplyBy2}>*2</button>
        <button onClick={multiplyBy2AndAddBy1}>*2 + 1</button>
      </div>
    </div>
  );
}
