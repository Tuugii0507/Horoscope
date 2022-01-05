import React, {  useState, useEffect } from "react"
import UltraProCircle from "./ultraProCircle";
import axios from "axios";
import arrow2 from "../assets/Arrow2.png"
import Sign_date from "./sign_date";
import Horoscope from "../App";

const UltraProCircle2 = ({ sign, date, showResults, setshowResults, Click}) => {

  const [data, setData] = useState()
  useEffect(() => {
      var options = {
          method: 'POST',
          url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
          params: {sign: sign, day: date},
          headers: {
              'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
              'x-rapidapi-key': '41d9f3ec2bmsh0deceec67d168ddp19bdccjsnccadb20f7e8f'
          }
      };
    
    axios.request(options).then( (response) => {
        console.log(response.data);
        setData(response.data)
    }).catch((error) => {
        console.error(error);
    });
}, []);

if(!data) {
    return <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
}

  return (<div>
    <div className="ultraDad">
      <div className="row" style={{ marginLeft: "5vw" }}>
        <UltraProCircle color={data && data.color} turul="COLOR" ner={data && data.color} />
        <UltraProCircle color="#96E27B" turul="LUCKY TIME" ner={data && data.lucky_time} />
        <UltraProCircle color="#AD7A4B" turul="LUCKY NUMBER" ner={data && data.lucky_number} />
        <UltraProCircle color="#74CCBC" turul="MOOD" ner={data && data.mood} />
        <UltraProCircle color="#C65858" turul="COMPATIBILITY" ner={data&& data.compatibility} />
      </div>
      <div className="dessDad">
      <div className="description">
        <div>
        <button onClick={Click} className="imgbutton" >
          <img src={arrow2}></img>
        </button>
        </div>
        <div style={{marginLeft:"5vw"}}>
          {data && data.description}
          </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default UltraProCircle2;
