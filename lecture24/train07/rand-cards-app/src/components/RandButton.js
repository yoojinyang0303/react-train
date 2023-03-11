import React from "react";
import BusinessCards from "./BusinessCards";

export default function RandButton(props) {
  const pick = () => {
    Math.floor(Math.random() * BusinessCards.length);
  };

  return <button onClick={pick}>추첨하기</button>;
}
