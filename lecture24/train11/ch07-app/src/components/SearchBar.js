import React from "react";

export default function SearchBar() {
  return (
    <>
      <input type="text" name="search" placeholder="Search..." />
      <br />
      <input id="stock" type="checkbox" name="checkbox" />
      <label htmlFor="stock">Only show products in stock</label>
    </>
  );
}
