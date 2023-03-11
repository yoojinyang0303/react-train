import React, { useRef, useState } from "react";
import Cat from "./Cat";

// 목표:: Cat.js 안에 있는 img 사이즈 알고 싶다!
export default function CatParent() {
  // const catRef = useRef();
  const catCallbackRef = (node) => {
    if (node !== null) {
      // alert(node);
      // alert(node.getBoundingClientRect().height);
      setHeight(node.getBoundingClientRect().height);
    }
  };
  console.log("부모 컴포넌트 CatParent");
  // console.log(catRef);

  const ageRef = useRef(1);
  const [height, setHeight] = useState(0);
  // console.log(ageRef.current);

  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        <Cat a={"a"} ref={catCallbackRef} />
        <h3>고양이 나이: {ageRef.current}살</h3>
        <h4>고양이 사진 height: {height}</h4>
        {/* <button onClick={() => alert(catCallbackRef.current.height)}>
          고양이 사진 크기 알고시펑
        </button> */}
        <button onClick={() => (ageRef.current = ageRef.current + 1)}>
          고양이 나이++
        </button>
        {/* <button onClick={() => setState(state + 1)}>상태++</button> */}
      </div>
    </div>
  );
}
