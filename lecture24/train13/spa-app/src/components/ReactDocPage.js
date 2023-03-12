import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ReactDocPage() {
  // docID: 1, 2, 3, ...
  const params = useParams();
  console.log(params); // url parameter 잘 불러오는지 확인용 로그 찍기

  const navigate = useNavigate();
  return (
    <>
      <h5 onClick={() => navigate("/")}>logo</h5>
      <div>ReactDocPage ##{params.docId}</div>
    </>
  );
}
