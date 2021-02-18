import React from "react";
import "../styles/style.css";

export default function Search({ onChange }) {
  return (
    <div className="searchContainer">
      <input
        onChange={onChange}
        className="searchBar"
        placeholder="enter something"
      />
    </div>
  );
}
