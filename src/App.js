import React from "react";
import Container from "./components/Container";
import DataViewer from "./components/DataViewer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import "./styles/style.css";

export default function App() {
  return (
    <Container>
      <Navbar title="Weatherish" />
      <div className="positionDiv">
        <Search onChange={() => console.log("hello")} />
        <DataViewer />
      </div>
    </Container>
  );
}
