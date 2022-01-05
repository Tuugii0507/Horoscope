import React, {useState} from "react";
import "../styles/horoscope.css";

const LeftTitles = ({ bigTitle, littleTitle, littleTextColor="rgba(148, 153, 195, 0.5)", iconColor="#9499C3" }) => {

 const [bg, setBg] = useState(iconColor);
  const changeColor = () => {
    if(bg === iconColor){
      setBg("green")
    }
    if(bg === "green"){
      setBg("orange")
    }
    if(bg === "orange"){
      setBg(iconColor)
    }
  }

  return (
    <div>
      <div className="dad">
        <div className="row">
          <div className="column">
            <div className="circle" style={{backgroundColor: bg}}>✓</div>
            <div></div>
          </div>
          <div className="column" style={{marginLeft : "0.7vw"}}>
            <div className="bigTitle" onClick={changeColor}>{bigTitle}</div>
            <div className="littleTitle" style={{color : littleTextColor}}>{littleTitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftTitles;


