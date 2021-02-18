import React from "react";
import "../styles/style.css";

export default function Navbar({ title }) {
  return (
    <div className="navbar">
      <h1 className="title">{title}</h1>
    </div>
  );
}
