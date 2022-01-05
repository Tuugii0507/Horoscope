import React from "react";

const UltraProCircle = ({ turul, ner , color}) => {
  return (
    <div>
      <div className="haruhaan">
        <div className="column border">
          <div className="turul">{turul}</div>
          <div style={{color:color, fontSize:"1.5vw"}}>{ner}</div>
        </div>
      </div>
    </div>
  );
};

export default UltraProCircle;
