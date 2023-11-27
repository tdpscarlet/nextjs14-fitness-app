"use client";

import axios from "axios";
import { useState } from "react";

const BodyFatCalc = () => {
  const [result, setResult] = useState<Result>();
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("male");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [neck, setNeck] = useState<string>("");
  const [waist, setWaist] = useState<string>("");
  const [hip, setHip] = useState<string>("");
  const [error, setError] = useState<string>("");
  const url = "https://fitness-calculator.p.rapidapi.com/bodyfat";
  const config = {
    headers: {
      "X-RapidAPI-Key": "aba5ebbb43msh492ff23b5162573p1dfe59jsnf1f5d5668110",
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
    params: {
      age,
      gender,
      height,
      weight,
      neck,
      waist,
      hip,
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
    else if (!neck) setError("Please enter neck circumference.");
    else if (Number(neck) < 20 || Number(neck) > 80)
      setError("Please provide neck circumference between 20cm and 80cm.");
    else if (!waist) setError("Please enter waist circumference.");
    else if (Number(waist) < 40 || Number(waist) > 130)
      setError("Please provide waist circumference between 40cm and 130cm.");
    else if (!hip) setError("Please enter hip circumference.");
    else if (Number(hip) < 40 || Number(hip) > 130)
      setError("Please provide hip circumference between 40cm and 130cm.");
    else {
      getResult();
      setError("");
    }
  };

  return (
    <div className="calc-wrapper">
      <span className="calc-title">
        <span className="text-yellow">Body Fat </span>Calculator
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
          <label htmlFor="">Gender</label>
          <select
            className="gender"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
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
          <label htmlFor="">Neck</label>
          <input
            type="number"
            value={neck}
            placeholder="20 - 80"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNeck(e.target.value);
            }}
          />
          <label htmlFor="">Waist</label>
          <input
            type="number"
            value={waist}
            placeholder="40 - 130"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setWaist(e.target.value);
            }}
          />
          <label htmlFor="">Hip</label>
          <input
            type="number"
            value={hip}
            placeholder="40 - 130"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setHip(e.target.value);
            }}
          />
          <button onClick={handleClick}>Calculate</button>
          {error && <span className="error">{error}</span>}
        </div>
        {result?.request_result === "Successful" && (
          <div className="calc-result">
            <span className="result-title">Result</span>
            <p>
              Body Fat (U.S. Navy Method):{" "}
              <span>{result.data["Body Fat (U.S. Navy Method)"]} %</span>
            </p>
            <p>
              Body Fat Mass: <span>{result.data["Body Fat Mass"]} </span>
              kgs
            </p>
            <p>
              Lean Body Mass: <span>{result.data["Lean Body Mass"]} </span>
              kgs
            </p>
            <p>
              Body Fat (BMI method):{" "}
              <span>{result.data["Body Fat (BMI method)"]} </span>%
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyFatCalc;
