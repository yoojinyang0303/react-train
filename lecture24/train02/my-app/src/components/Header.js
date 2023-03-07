// 컴포넌트 연습
import React from "react";
import logo from "../logo.svg";

export default function Headers() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload. Yahoo !!!!!!!!!
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Welcome, Learn React
      </a>
    </header>
  );
}
