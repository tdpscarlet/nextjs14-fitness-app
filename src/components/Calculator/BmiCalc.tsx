"use client";

import { useState } from "react";
import axios from "axios";
import "./calculators.css";

const BmiCalc = () => {
  const [result, setResult] = useState<Result>();
  const [age, setAge] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [error, setError] = useState<string>("");

  const url = "https://fitness-calculator.p.rapidapi.com/bmi";
  const config = {
    headers: {
      "X-RapidAPI-Key": "aba5ebbb43msh492ff23b5162573p1dfe59jsnf1f5d5668110",
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
    params: {
      age,
      height,
      weight,
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
    if (!age) setError("Please enter age.");
    else if (Number(age) < 15 || Number(age) > 80)
      setError("Please provide an age between 15 and 80.");
    else if (!height) setError("Please enter height.");
    else if (Number(height) < 130 || Number(height) > 230)
      setError("Please provide a height between 130cm and 230cm.");
    else if (!weight) setError("Please enter weight.");
    else if (Number(weight) < 40 || Number(weight) > 160)
      setError("Please provide a weight between 40kg and 160kg.");
    else {
      getResult();
      setError("");
    }
  };

  return (
    <div className="calc-wrapper">
      <span className="calc-title">
        <span className="text-yellow">BMI </span>
        Calculator
      </span>
      <div className="calc-container">
        <div className="calc-form">
          <label htmlFor="">Age</label>
          <input
            type="number"
            value={age}
            placeholder="15 - 80"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAge(e.target.value);
            }}
          />
          <label htmlFor="">Height (cm)</label>
          <input
            type="number"
            value={height}
            placeholder="130 - 230"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setHeight(e.target.value);
            }}
          />
          <label htmlFor="">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            placeholder="40 - 160"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setWeight(e.target.value);
            }}
          />
          <button onClick={handleClick}>Calculate</button>
          {error && <span className="error">{error}</span>}
        </div>
        {result?.request_result === "Successful" && (
          <div className="calc-result">
            <span className="result-title">Result</span>
            <p>
              BMI: <span>{result.data.bmi}</span>
            </p>
            <p>
              Health: <span>{result.data.health}</span>
            </p>
            <p>
              Healthy BMI range: <span>{result.data.healthy_bmi_range}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BmiCalc;
