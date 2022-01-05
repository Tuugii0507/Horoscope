import React from "react";
import LeftTitles from "./left_titles";


const LeftBar = () => {
    return (
        <div className="leftBar">
              <LeftTitles bigTitle="ALL SYSTEMS CHECK" littleTitle="NORMAL" />
              <LeftTitles
                bigTitle="RENDEZVOUS BURN SLOW"
                littleTitle="NORMAL"
                littleTextColor="rgba(148, 153, 195, 0.5)"
              />
              <LeftTitles
                bigTitle="PREPARE RENDEZVOUS BURN"
                littleTitle="NORMAL"
              />
              <LeftTitles
                bigTitle="THERMAL SHIELD"
                littleTitle="Applied"
                iconColor="green"
                littleTextColor="#fff"
              />
              <LeftTitles bigTitle="BURN Go/No-GO" littleTitle="NORMAL" />
              <LeftTitles
                bigTitle="POWER COMPLETION"
                littleTitle="Awaiting"
                iconColor="orange"
                littleTextColor="#fff"
              />
              <LeftTitles bigTitle="STATION DECK CHECK" littleTitle="NORMAL" />
            </div>
    )
}

export default LeftBar