// 컴포넌트 연습
import React from "react";
import logo from "../logo.svg";

const Header = (props) => {
  // props : object

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to blah blah....
      </p>
      <p class="aaa" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.text}
      </a>
    </header>
  );
};

export default Header;
