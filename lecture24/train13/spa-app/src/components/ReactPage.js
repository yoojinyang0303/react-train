import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function ReactPage() {
  // api call -> react에 해당하는 글의 목록을 응답 받음.
  // 아래는 static한 데이터 (임시용)
  const docs = [
    {
      id: 1,
      title: "React 공부를 시작하며",
      date: "03/01/2023",
    },
    {
      id: 2,
      title: "CRA 없이 리액트 프로젝트 시작하기",
      date: "03/02/2023",
    },
    {
      id: 3,
      title: "이제는 사용해보자 useMemo & useCallback",
      date: "03/04/2023",
    },
    {
      id: 4,
      title: "React 프로젝트에 Prettier 적용하기",
      date: "03/06/2023",
    },
    {
      id: 5,
      title: "React의 setState() 제대로 사용하기",
      date: "03/09/2023",
    },
  ];

  return (
    <>
      <div>
        {docs.map((doc) => (
          <Link
            to={`${doc.id}`}
            key={doc.id}
            style={{ display: "block", margin: "1rem 0" }}
          >
            {doc.title}
          </Link>
        ))}
      </div>
      {/* <Outlet /> */}
    </>
  );
}
