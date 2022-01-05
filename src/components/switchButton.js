import React from "react";
import "../styles/horoscope.css";
const SwitchButton = ({ show, toggle }) => {
  return (
    <div className="switchButton">
      <div className="row" style={{ marginTop: "2vh" }}>
        <div>
          {show == true ? (
            <div className="center">
              <div onClick={toggle} className={show ? "black" : "white"}>
                SYSTEMS
              </div>
              <div className={show ? "white" : "black"}>CABIN</div>
            </div>
          ) : (
            <div className="center">
              <div className={show ? "black" : "white"}>SYSTEMS</div>
              <div onClick={toggle} className={show ? "white" : "black"}>
                CABIN
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwitchButton;
