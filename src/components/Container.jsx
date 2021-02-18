import React from "react";
import "../styles/style.css";
import StyledDiv from "./StyledDiv";

export default function Container({ children }) {
  const getImage = () => {
    const currentInstance = new Date();
    const currentTime = currentInstance.getHours();

    if (currentTime >= 7 && currentTime < 12) return "bg1";
    if (currentTime >= 13 && currentTime < 18) return "bg2";
    if (currentTime >= 19 && currentTime < 23) return "bg3";
  };

  return <StyledDiv bgImage={getImage()}>{children}</StyledDiv>;
}
