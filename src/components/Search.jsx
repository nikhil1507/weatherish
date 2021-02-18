import React from "react";
import "../styles/style.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Search({ onChange, value, isShow, onClick }) {
  return (
    <div className="searchContainer">
      <input
        onChange={onChange}
        className="searchBar"
        placeholder="enter something"
        value={value}
      />
      {isShow ? (
        <i
          style={{
            marginLeft: "5px",
            fontSize: "20px",
            color: "#5c5656f1",
            cursor: "pointer",
          }}
          className="fas fa-search"
          onClick={onClick}
        ></i>
      ) : null}
    </div>
  );
}
