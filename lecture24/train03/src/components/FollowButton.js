import React from "react";

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

  // Javascript -> JSX
  //   return React.createElement(
  //     "div",
  //     {
  //       onClick: () => setFollowing(!following),
  //       style: following ? followingBtnStyle : followBtnStyle,
  //     },
  //     following ? "following" : "Follow"
  //   );
  return (
    <div
      onClick={() => setFollowing(!following)}
      style={following ? followingBtnStyle : followingBtnStyle}
    >
      {following ? "following" : "Follow"}
    </div>
  );
}

export default FollowButton;
