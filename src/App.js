import React, {  useState } from "react";
import "./styles/horoscope.css";
import SwitchButton from "./components/switchButton";
import Sign_date from "./components/sign_date";
import spaceX from "./assets/spaceX.png";
import LeftBar from "./components/left-bar";
import UltraProCircle2 from "./components/ultraProCircle2";

const Horoscope = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  const [showResults, setShowResults] = useState(false);
  const Click = () => setShowResults(!showResults);
  const [sign , setSign] = useState("Aries")
  const [date , setDate] = useState("Today")

  return (
    <div>
      <div className="title">HOROSCOPE</div>
      <div className="row">
        <div className="column">
          <div style={{height: '70vh', width:"20vw"}}>{!show ? <LeftBar />  : <img src={spaceX} />}</div>
          <div >
            <SwitchButton show={show} toggle={toggle} />
          </div>
        </div>
        <div>
        { showResults ? <UltraProCircle2 sign={sign} date={date} showResults={showResults} setShowResults={setShowResults} Click={Click}/> : <Sign_date Click={Click} date={date} setDate={setDate} sign={sign} setSign={setSign}/> }
        </div>
      </div>
    </div>
  );
};
export default Horoscope;
