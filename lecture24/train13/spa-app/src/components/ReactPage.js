import React, { useEffect, useState } from "react";
import { Link, Outlet, useFetcher } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

export default function ReactPage() {
  // api call -> react에 해당하는 글의 목록을 응답 받음.
  // 아래는 static한 데이터 (임시용)
  // const [docs, setDocs] = useState([]);
  const [number, setNumber] = useState(0);

  //useSWR
  async function fetcher(url) {
    const result = await axios.get(url);
    console.log(result.data); // 상태값
    // setDocs(result.data);
    return result.data;
  }
  const { data: docs, error } = useSWR("posts", () =>
    fetcher("https://jsonplaceholder.typicode.com/posts")
  );

  // const docs = [
  //   {
  //     id: 1,
  //     title: "React 공부를 시작하며",
  //     date: "03/01/2023",
  //   },
  //   {
  //     id: 2,
  //     title: "CRA 없이 리액트 프로젝트 시작하기",
  //     date: "03/02/2023",
  //   },
  //   {
  //     id: 3,
  //     title: "이제는 사용해보자 useMemo & useCallback",
  //     date: "03/04/2023",
  //   },
  //   {
  //     id: 4,
  //     title: "React 프로젝트에 Prettier 적용하기",
  //     date: "03/06/2023",
  //   },
  //   {
  //     id: 5,
  //     title: "React의 setState() 제대로 사용하기",
  //     date: "03/09/2023",
  //   },
  // ];

  // api 호출 데이터
  // (1) fetch API 방식
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     // console.log(res);
  //     const result = await res.json();
  //     console.log(result); // 활용하기 위해 "상태값"으로 만들어 관리
  //     // setDocs(result);

  //     return result;
  //   }

  //   fetchData().then((res) => {
  //     setDocs(res);
  //   });
  // }, []);

  // (2) axios (권장!!!)
  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     console.log(result); // 활용하기 위해 "상태값"으로 만들어 관리
  //     console.log(result.data); // 활용하기 위해 "상태값"으로 만들어 관리
  //     // setDocs(result);

  //     return result.data;
  //   }

  //   fetchData().then((res) => {
  //     setDocs(res);
  //   });
  // }, []);

  //
  if (error) return <div>Failed to load...!</div>;
  if (!docs) return <div>Loading...</div>;

  return (
    <>
      <div>
        <button onClick={() => setNumber(number + 1)}>{number}</button>
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
