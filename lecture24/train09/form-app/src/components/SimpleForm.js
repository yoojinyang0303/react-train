import React, { useState } from "react";

export default function SimpleForm() {
  //   const [nickname, setNickname] = useState("");
  //   const [password, setPassword] = useState("");

  // 다중 입력 자체를 하나의 useState로
  const [userInputs, setUserInputs] = useState({
    nickname: "",
    password: "",
  });

  const handleChange = (e) => {
    // e.target.name === "nickname" ? return setNickname(e.target.value) : return setPassword(e.target.value);

    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });

    // if (e.target.name === "nickname") {
    //   return setNickname(e.target.value);
    // } else {
    //   return setPassword(e.target.value);
    // }
  };

  // e.target.value의 쓰임?

  const handleSubmit = (e) => {
    e.preventDefault(); // event 기본 동작 제거
    // 서버 요청 + a
    const { nickname, password } = userInputs;
    alert(`nickname: ${nickname}, password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>닉네임: </label>
      <input
        type="text"
        name="nickname"
        value={userInputs.nickname}
        onChange={handleChange}
      />
      <br />
      <label>패스워드: </label>
      <input
        type="text"
        name="password"
        value={userInputs.password}
        onChange={handleChange}
      />
      <input type="submit" value="제출" />
    </form>
  );
}
