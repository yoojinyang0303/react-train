import React, { useState } from "react";

export default function SimpleForm() {
  const [nickname, setNickname] = useState("initial");
  const handleChange = (e) => {
    setNickname(e.target.value);
  };

  // e.target.value의 쓰임?

  const handleSubmit = (e) => {
    e.preventDefault(); // event 기본 동작 제거
    // 서버 요청 + a
    alert(nickname);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>닉네임: </label>
      <input
        type="text"
        name="nickname"
        value={nickname}
        onChange={handleChange}
      />
      <input type="submit" value="제출" />
    </form>
  );
}
