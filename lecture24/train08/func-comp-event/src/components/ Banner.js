import React, { useState } from "react";

const Banner = () => {
  //   let closeBoolean = true;
  const [visible, setVisible] = useState(true);
  function close(e) {
    // closeBoolean = !closeBoolean;
    // console.log("closeBooean: " + closeBoolean);
    e.stopPropagation(); // eventBubbling 방지 역할 함수
    setVisible(false); //비동기
  }
  function eventAlert() {
    return alert("10% 할인 쿠폰에 당첨 되었습니다!");
  }
  return visible ? (
    <div
      onClick={eventAlert}
      style={{
        backgroundColor: "orange",
        fontWeight: "bold",
        height: "50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      이 곳을 클릭해서 쿠폰을 받아가세요.
      <button onClick={close}>닫기</button>
    </div>
  ) : null;
};

export default Banner;
