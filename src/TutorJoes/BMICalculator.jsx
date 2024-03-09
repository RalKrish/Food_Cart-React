import React, { useState } from "react";
import "./BMICalculator.css";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const [bmi, setBMI] = useState(null);
  const [BMI_status, setStatus] = useState("");

  const [gender, setGender] = useState("");
  const[genderEr,setGendError]=useState(false)

  function calcBMI() {

    setGendError(false);
if(!gender){
  setGendError(true)
  return
}


    if (height && weight) {
      const heightInMeters = height / 100;
      const BMI_value = weight / (heightInMeters * heightInMeters);
      console.log(BMI_value);
      setBMI(BMI_value.toFixed(2));

      if (gender === "male") {
        if (BMI_value < 18.5) {
          setStatus("Underweight");
        } else if (BMI_value >= 18.5 && BMI_value < 24.9) {
          setStatus("Normal Weight");
        } else if (BMI_value >= 25 && BMI_value < 29.9) {
          setStatus("Overweight");
        } else {
          setStatus("Obese");
        }
      } else if (gender === "female") {
        if (BMI_value < 18.5) {
          setStatus("Underweight");
        } else if (BMI_value >= 18.5 && BMI_value < 23.9) {
          setStatus("Normal Weight");
        } else if (BMI_value >= 24 && BMI_value < 28.9) {
          setStatus("Overweight");
        } else {
          setStatus("Obese");
        }
      }
    }
  }

  function clearFn() {
    setWeight("");
    setHeight("");
    setBMI(null);
    setStatus("");
    setGender('')
  }

  return (
    <div className="mainCont">
      <h1>BMI Calculator</h1>

      <div className="element">
        <label htmlFor="height">Height(cm)</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(ev) => setHeight(ev.target.value)}
        />
      </div>

      <div className="element">
        <label htmlFor="weight">Weight(kg)</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(ev) => setWeight(ev.target.value)}
        />
      </div>

      <div className="element">
        <label htmlFor="gender">Gender: </label>
        <input
          id="male"
          type="radio"
          value="male"
          checked={gender === "male"}
          onChange={() => setGender("male")}
        />
        Male
        <input
          id="female"
          type="radio"
          value="female"
          checked={gender === "female"}
          onChange={() => setGender("female")}
        />
        Female
        {genderEr && <p className="error1">"Please select gender"</p> }
      </div>

      <div className="element">
        <button onClick={calcBMI} className="bmiBtn">
          Calculate BMI
        </button>
        <button onClick={clearFn}>Clear</button>

        {bmi !== null && (
          <div className="result">
            <p>
              Your BMI is: <span>{bmi}</span>
            </p>
            <p>
              Status: <span>{BMI_status}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
