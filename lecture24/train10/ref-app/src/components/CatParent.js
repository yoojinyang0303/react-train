import React, { useRef } from "react";
import Cat from "./Cat";

// 목표:: Cat.js 안에 있는 img 사이즈 알고 싶다!
export default function CatParent() {
  const catRef = useRef();
  console.log("부모 컴포넌트 CatParent");
  console.log(catRef);

  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        <Cat a={"a"} ref={catRef} />
        <button onClick={() => alert(catRef.current.height)}>
          고양이 사진 크기 알고시펑
        </button>
      </div>
    </div>
  );
}
