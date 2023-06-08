import { useState } from "react";
import Distance from "./Distance";
import { From,cities } from "./From";
import To from "./To";


export default function Body() {
    const [isBooked,setisBooked]=useState(false)
    const[totalcost,settotalcost]=useState(0)
    const cost={suv:15,sedan:10,hatchback:5}
    
function handleclick(){
  const total=cost[document.getElementById("cartype").value]*document.getElementById("distance").value
    if(cities.includes( document.getElementById("from").value ) && cities.includes(document.getElementById("to").value)){
      settotalcost(total)
        setisBooked(true)
    }
    else{
        setisBooked(false)
    }
}
  
  
    return (
   
    <div className="innerbody">
         {isBooked ? (<div className="booked"><h1>THE TICKET IS BOOKED</h1>
         <p> FROM:{document.getElementById("from").value}</p>
         <p> TO:{document.getElementById("to").value}</p>
         <p>Total cost {totalcost}</p></div>):(
      <div className="inputfield">
        <div>
          <From name="from :" id="from" />
        </div>
        <div>
        <To name="to:" id="to" />
        </div>
        <div>
          <Distance />
        </div>
        <div>
          <label>Type:</label>
          <select id="cartype">
            <option value="suv" size="40">
              suv
            </option>
            <option value="sedan" size="40">
              sedan
            </option>
            <option value="hatchback" size="40">
              hacth back
            </option>
          </select>
        </div>
        <div>
          <input type="date" id="date"></input>
          <input type="time" id="time"></input>
        </div>

        <div className="button">
          <button type="button" onClick={handleclick} className="buttons">
            BOOK
          </button>
        </div>
      </div>
         )}
    </div>
         
  );
}
