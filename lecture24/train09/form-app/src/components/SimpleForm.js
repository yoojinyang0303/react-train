import React from "react";

export default function SimpleForm() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <label>닉네임: </label>
      <input type="text" name="nickname" onChange={handleChange} />
    </>
  );
}
