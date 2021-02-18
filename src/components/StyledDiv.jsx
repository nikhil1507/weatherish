import React from "react";
import styled from "styled-components";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";

const StyledDiv = styled.div`
  background-image: url(${(props) => {
    if (props.bgImage === "bg1") return bg1;
    if (props.bgImage === "bg2") return bg2;
    if (props.bgImage === "bg3") return bg3;
  }});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

export default StyledDiv;
