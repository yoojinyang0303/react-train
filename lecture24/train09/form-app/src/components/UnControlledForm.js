import React, { useRef } from "react";

// ref를 활용하여 비제어(handler함수 필요X) 컴포넌트 방식으로 FORM 다루기
export default function UnControlledForm() {
  const inputRef = useRef();
  //   const handleChange = (e) => {
  //     console.log(e.target.value);
  //   };

  console.log(inputRef);
  console.log(inputRef.current);

  function handleSubmit(e) {
    e.preventDefault();
    alert(inputRef.current.value);
    inputRef.current.focus(); // REF focus 예시
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>닉네임: </label>
      <input
        type="text"
        name="nickname"
        // onChange={handleChange}
        ref={inputRef}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
