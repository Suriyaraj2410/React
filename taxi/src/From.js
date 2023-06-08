/* eslint-disable no-unused-vars */
import { useState } from "react";
export const cities = [
  "Adambakkam",
  "Adyar",
  "Alandur",
  "Ambattur",
  "Anna Nagar",
  "Ashok Nagar",
  "Ayanavaram",
  "Chetpet",
  "Chintadripet",
  "Choolai",
  "Choolaimedu",
  "Chrompet",
  "Egmore",
  "Ekkaduthangal",
  "Ennore",
  "Foreshore Estate",
  "Fort St. George",
  "George Town",
  "Gopalapuram",
  "Government Estate",
  "Guindy",
  "IIT Madras",
  "Injambakkam",
  "Jafferkhanpet",
  "Kattivakkam",
  "Kazhipattur",
  "Keelkattalai",
  "Kilpauk",
  "Kodambakkam",
  "Kodungaiyur",
  "Kolathur",
  "Korattur",
  "Kottivakkam",
  "Kotturpuram",
  "Kovilambakkam",
  "Koyambedu",
  "Kundrathur",
  "Madhavaram",
  "Madipakkam",
  "Manali",
  "Manapakkam",
  "Mandaveli",
  "Medavakkam",
  "Meenambakkam",
  "Mogappair",
  "Mylapore",
  "Nanganallur",
  "Navalur",
  "Neelankarai",
  "Nungambakkam",
  "Palavakkam",
  "Pallavaram",
  "Pallikaranai",
  "Pammal",
  "Park Town",
  "Parry's Corner",
  "Pattabiram",
  "Perambur",
  "Perungalathur",
  "Perungudi",
  "Poonamallee",
  "Porur",
  "Pudupet",
  "Purasawalkam",
  "Puzhal",
  "Raja Annamalai Puram",
  "Ramapuram",
  "Red Hills",
  "Royapettah",
  "Royapuram",
  "Saidapet",
  "Saligramam",
  "Santhome",
  "Selaiyur",
  "Shenoy Nagar",
  "Sholinganallur",
  "Sithalapakkam",
  "Sowcarpet",
  "St. Thomas Mount",
  "T. Nagar",
  "Tambaram",
  "Teynampet",
  "Thirumangalam",
  "Thirumullaivoyal",
  "Thiruvanmiyur",
  "Thiruverkadu",
  "Thoraipakkam",
  "Thousand Lights",
  "Tondiarpet",
  "Triplicane",
  "Ullagaram-Puzhuthivakkam",
  "Vadapalani",
  "Valasaravakkam",
  "Vanagaram",
  "Velachery",
  "Vepery",
  "Villivakkam",
  "Virugambakkam",
  "Vyasarpadi",
  "Washermanpet",
  "West Mambalam",
];

export function From(props) {
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
 
  // function check() {
  //  if(cities.includes(document.getElementById("from").value) || document.getElementById("to").value){
  //   document.getElementById("distance").value=Math.floor(Math.random()*10+1)
  //  }
  // }
  

  return (
    <>
      <label>{props.name}</label>
      <input
        list="cities"
        onChange={inputs}
        value={input}
         //onBlur={check}
        id={props.id}
      />
      <datalist id="cities">{handleoption()}</datalist>
    </>
  );
}
