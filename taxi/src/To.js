import { cities } from "./From";
import { useState } from "react";
export default function To(props){
    const [input, setinpput] = useState("");
  
    function handleoption() {
      return cities.map((city) => {
        return <option value={city}>{city}</option>;
      });
    }
  
    const inputs = (e) => {
      setinpput(e.currentTarget.value);
      if (
        (document.getElementById("from") || {}).value !== "" &&
        (document.getElementById("to") || {}).value !== ""
      ) {
        if (
          (document.getElementById("from") || {}).value ===
          (document.getElementById("to") || {}).value
        ) {
          alert("enter the correct destination");
          setinpput("");
        }
      }
    };
   
    function check() {
     if(cities.includes(document.getElementById("from").value) && cities.includes( document.getElementById("to").value)){
        console.log(document.getElementById("to").value)
      document.getElementById("distance").value=Math.floor(Math.random(5,30)*50)
     }
    }
    
    
    return (
        <>
          <label>{props.name}</label>
          <input
            list="cities"
            onChange={inputs}
            value={input}
             onBlur={check}
            id={props.id}
          />
          <datalist id="cities">{handleoption()}</datalist>
        </>
      );
}



  
 