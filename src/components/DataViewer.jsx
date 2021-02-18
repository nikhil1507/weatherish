import React from "react";
import "../styles/style.css";

export default function ({
  searchedLocation,
  parentCountry,
  temp,
  weather,
  toShow,
}) {
  return (
    <>
      {toShow ? (
        <div className="dataViewer">
          <h2 style={{ fontSize: "40px", color: "white" }}>
            {searchedLocation}
          </h2>
          <h2 style={{ fontSize: "30px", color: "white" }}>{parentCountry}</h2>

          <h4 style={{ color: "white", fontSize: "25px" }}>
            {new Date().toDateString()}
          </h4>

          <h1
            style={{
              color: "white",
              fontSize: "50px",
              marginTop: "60px",
              marginBottom: "40px",
            }}
          >
            {temp} &deg;C
          </h1>

          <h3 style={{ color: "white", fontSize: "35px" }}>{weather}</h3>
        </div>
      ) : null}
    </>
  );
}
