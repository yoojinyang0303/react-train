import React from "react";

export default class Clock extends React.Component {
  // 초기화(정의)
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // Date의 상태 최신으로 업데이트하는ㅡ 해당 컴포넌트를 업데이트 하는 함수
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  // tick 메소드가 정상 생성되는지 확인용
  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    console.log(this.state.date);
  }

  // component를 DOM에서 제거되는 경우
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerID);
  }

  // 컴포넌트의 첫 render에서 실행될 내용
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
