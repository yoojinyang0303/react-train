import React, { useState, createContext, useSyncExternalStore } from "react";

export const UserContext = createContext();

export default function UserStore(props) {
  const [job, setJob] = useState("FE-developer");
  // 임시 static 데이터
  const user = {
    name: "muumi",
    job,
    changeJob: (updateJob) => setJob(),
  };
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
}
