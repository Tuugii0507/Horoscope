import React, {useState} from "react";
import Dropdown from "./dropdown";
import Arrow from "./arrow";

const Sign_date = ({Click ,sign, setSign, date, setDate}) => {
  
  return (
    <div>
      <div className="grandfather">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div className="newtitle">
            SIGN
            <div>
              <Dropdown value={sign} setValue={setSign} someone={["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]} />
            </div>
          </div>
          <div className="newtitle">
            DATE
            <div >
              <Dropdown someone={["Yesterday", "Today", "Tomorrow"]} value={date} setValue={setDate}/>
            </div>
          </div>
          <Arrow Click={Click} />
        </div>
      </div>
    </div>
  );
};

export default Sign_date;
