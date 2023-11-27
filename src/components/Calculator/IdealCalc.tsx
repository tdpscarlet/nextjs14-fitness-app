"use client";

import axios from "axios";
import { useState } from "react";

const IdealCalc = () => {
  const [result, setResult] = useState<Result>();
  const [gender, setGender] = useState<string>("male");
  const [height, setHeight] = useState<string>("");
  const [error, setError] = useState<string>("");

  const url = "https://fitness-calculator.p.rapidapi.com/idealweight";
  const config = {
    headers: {
      "X-RapidAPI-Key": "aba5ebbb43msh492ff23b5162573p1dfe59jsnf1f5d5668110",
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
    params: {
      gender,
      height,
    },
  };

  const getResult = async () => {
    try {
      const response = await axios(url, config);
      setResult(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    if (!height) setError("Please enter height.");
    else if (Number(height) < 130 || Number(height) > 230)
      setError("Please provide a height between 130cm and 230cm.");
    else {
      getResult();
      setError("");
    }
  };

  return (
    <div className="calc-wrapper">
      <span className="calc-title">
        <span className="text-yellow">Ideal Weight </span>
        Calculator
      </span>
      <div className="calc-container">
        <div className="calc-form">
          <label htmlFor="">Gender</label>
          <select
            className="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label htmlFor="">Height (cm)</label>
          <input
            type="number"
            value={height}
            placeholder="130 - 230"
            required
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />
          <button onClick={handleClick}>Calculate</button>
          {error && <span className="error">{error}</span>}
        </div>
        {result?.request_result === "Successful" && (
          <div className="calc-result">
            <span className="result-title">Result</span>
            <p>
              Hamwi method: <span>{Math.round(result.data.Hamwi!)} </span>
              kgs
            </p>
            <p>
              Devine method: <span>{Math.round(result.data.Devine!)} </span>
              kgs
            </p>
            <p>
              Miller method: <span>{Math.round(result.data.Miller!)} </span>
              kgs
            </p>
            <p>
              Robinson method: <span>{Math.round(result.data.Robinson!)} </span>
              kgs
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdealCalc;
