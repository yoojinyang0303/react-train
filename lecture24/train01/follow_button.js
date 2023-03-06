// React Component!
// Follow <-> following 동작을 하는 버튼

// starter code
function FollowButton() {
  const [following, setFollowing] = React.useState(false);

  const commonBtnStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "12px",
    right: "16px",
    width: "100px",
    height: "36px",
    borderRadius: "9999px",
    fontWeight: "bold",
  };

  const followBtnStyle = {
    ...commonBtnStyle,
    color: "white",
    backgroundColor: "black",
  };

  const followingBtnStyle = {
    ...commonBtnStyle,
    border: "1px solid #cfd9de",
    color: "white",
    backgroundColor: "black",
  };

  return React.createElement(
    "div",
    {
      onClick: () => setFollowing(!following),
      style: following ? followingBtnStyle : followBtnStyle,
    },
    following ? "following" : "Follow"
  );
}
// 아래 두 줄의 코드는 첫 단계에서 HTML 페이지에 추가했던 <div> 태그를 찾아주고 그 안에 "Following"이라는 내용의 React 컴포넌트를 추가한다.
const domContainer = document.querySelector("#follow_button_container");
ReactDOM.render(React.createElement(FollowButton), domContainer);
