import React, { useState } from "react";

export default function FunctionClock() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
