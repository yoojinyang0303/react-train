// 명함 컴포넌트 파일
import React, { useState } from "react";

export default function BusinessCards(props) {
  console.log(props);
  const { company, team, name, phoneNumber, email } = props.info;
  return (
    <div>
      <div>회사 : {company}</div>
      <div>팀 : {team}</div>
      <div>이름 : {name}</div>
      <div>휴대번호 : {phoneNumber}</div>
      <div>이메일 : {email}</div>
    </div>
  );
}
