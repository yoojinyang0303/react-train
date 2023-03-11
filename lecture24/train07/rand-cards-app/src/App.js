// import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import RandButton from "../src/components/RandButton";
// import BusinessCards from "../src/components/BusinessCards";
// import datas from "./data/Cards";

// function App() {
//   const [cards, setCards] = useState([]);
//   const [pickedCards, setPickedCards] = useState([]);

//   useEffect(() => {
//     // cards의 상태 초기화
//     setCards(datas);
//   }, []);

//   console.log(cards);
//   console.log(pickedCards);

//   function draw() {
//     // 조건 추가 : 3명
//     if (pickedCards.length > 2) {
//       // alert
//       const names = pickedCards.reduce((acc, cur) => {
//         return (acc = acc.concat(`${cur.name}, `, ``));
//       }, "");
//       return alert(`당첨자는 ${names} 입니다`);
//     }
//     // rand로 명함 고르기
//     const randomIdx = Math.floor(Math.random() * cards.length);
//     const randomItem = cards[randomIdx];

//     // 응답값 중 중복값 제거
//     setCards(cards.filter((c) => c.phoneNumber !== randomItem.phoneNumber));

//     // 당첨자 관리 (별도의 배열로 데이터 저장 필요)
//     setPickedCards([...pickedCards, randomItem]);
//   }
//   return (
//     <div>
//       {datas.length > 0 && <button onClick={draw}>추첨하기</button>}
//       {pickedCards.length > 0 && (
//         <BusinessCards info={pickedCards[pickedCards.length - 1]} />
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data/Cards";
import BusinessCards from "./components/BusinessCards";

function App() {
  // 1. 데이터 초기화
  const [cards, setCards] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, []);

  // 2. random 추첨 구현
  function pick() {
    console.log("pick");
    if (pickedCards.length > 2) {
      const names = pickedCards.reduce((prev, cur) => {
        return (prev = prev.concat(`${cur.name}, `, ``));
      }, "");
      return alert(`축하합니다! 당첨자는 ${names} 입니다.`);
    }
    const randomIdx = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIdx];

    setCards(cards.filter((c) => c.phoneNumber !== randomItem.phoneNumber));

    setPickedCards([...pickedCards, randomItem]);
  }
  return (
    <div>
      {data.length > 0 && <button onClick={pick}>추첨하기</button>}
      {/* {pickedCards.length > 0 && (
        <BusinessCards info={pickedCards[pickedCards.length - 1]} />
      )} */}
      {pickedCards.length > 0 &&
        pickedCards.map((pickedCard) => <BusinessCards info={pickedCard} />)}
    </div>
  );
}

export default App;
