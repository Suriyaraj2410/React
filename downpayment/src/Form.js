import { useState } from "react";

export default function Form() {
  const [salary, setsalary] = useState("");
  const [saving, setsaving] = useState("");
  const [dreamhouse, setdreamhouse] = useState("");
  const [result, setresult] = useState("");
  
  function updatesalary(e) {
    setsalary(e.target.value);
  }
  function updatesaving(e) {
    if (e.target.value >= 0 && e.target.value <=1) {
      setsaving(e.target.value);
    }
  }
  function updatedreamhouse(e) {
    setdreamhouse(e.target.value);
  }

  function months() {
    const monthlysalary = Number(salary / 12);
    console.log(saving)

    const costsaving = Number(saving)*monthlysalary;
    console.log(costsaving)

    const downpayment = Number(dreamhouse * 0.25);
    console.log(downpayment);
    setresult(Math.ceil(downpayment / costsaving));
  }
  return (
    <div className="innerbody">
      <div>
        <label for="anuual salary">Annual Salary</label>
        <input
          type="number"
          min="0"
          onChange={updatesalary}
          placeholder="Enter the annual salary"
          value={salary}
        ></input>
      </div>
      <div>
        <label for="TO_SAVE">Percentage</label>
        <input
          type="number"
          min="0"
          placeholder="Enter the saving percentage"
          id="percentage"
          value={saving}
          onChange={updatesaving}
        ></input>
      </div>
      <div>
        <label for="Dreamhouse">Dreamhouse</label>
        <input
          type="number"
          min="0"
          placeholder="Enter the dreamhouse"
          id="dreamhouse"
          value={dreamhouse}
          onChange={updatedreamhouse}
        ></input>
      </div>
      <div>
        <input type="button" value="submit" onClick={months}></input>
      </div>
      <div>
        <p> MONTHS: {result}</p>
      </div>
    </div>
  );
}
