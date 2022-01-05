import React from "react";
import arrowImage from "../assets/Arrow.png";
import "../styles/horoscope.css";

const Arrow = ({Click}) => {  
  return (
    <div style={{ marginTop: "10vh" }}>
      <button className="imgbutton" onClick={Click}>
        <img src={arrowImage}></img>
      </button>
    </div>
  );
};

export default Arrow;
