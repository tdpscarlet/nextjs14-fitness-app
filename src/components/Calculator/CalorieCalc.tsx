"use client";

import { useState } from "react";
import axios from "axios";

const CalorieCalc = () => {
  const [result, setResult] = useState<Result>();
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("male");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [activity, setActivity] = useState<string>("level_1");
  const [error, setError] = useState<string>("");

  const url = "https://fitness-calculator.p.rapidapi.com/dailycalorie";
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
      activitylevel: activity,
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
        <span className="text-yellow">Calorie </span>
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
          <label htmlFor="">Activity</label>
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setActivity(e.target.value);
            }}
          >
            <option value="level_1">Sedentary: little or no exercise</option>
            <option value="level_2">Exercise 1-3 times/week</option>
            <option value="level_3">Exercise 4-5 times/week</option>
            <option value="level_4">
              Daily exercise or intense exercise 3-4 times/week
            </option>
            <option value="level_5">Intense exercise 6-7 times/week</option>
            <option value="level_6">
              Very intense exercise daily, or physical job
            </option>
          </select>
          <button onClick={handleClick}>Calculate</button>
          {error && <span className="error">{error}</span>}
        </div>
        {result?.request_result === "Successful" && (
          <div className="calc-result">
            <span className="result-title">Result</span>
            <p>
              BMR: <span>{Math.round(result.data.BMR!)} </span>
              (Calories/day)
            </p>
            <p>
              Maintain weight:{" "}
              <span>{Math.round(result.data.goals!["maintain weight"]!)} </span>
              (Calories/day)
            </p>
            <p>
              Mild weight loss (0.25kg):{" "}
              <span>
                {Math.round(result.data.goals!["Mild weight loss"]!.calory!)}{" "}
              </span>
              (Calories/day)
            </p>
            <p>
              Weight loss (0.5kg):{" "}
              <span>
                {Math.round(result.data.goals!["Weight loss"]!.calory!)}{" "}
              </span>
              (Calories/day)
            </p>
            <p>
              Extreme weight loss (1kg):{" "}
              <span>
                {Math.round(result.data.goals!["Extreme weight loss"]!.calory!)}{" "}
              </span>
              (Calories/day)
            </p>
            <p>
              Mild weight gain (0.25kg):{" "}
              <span>
                {Math.round(result.data.goals!["Mild weight gain"]!.calory!)}{" "}
              </span>
              (Calories/day)
            </p>
            <p>
              Weight gain (0.5kg):{" "}
              <span>
                {Math.round(result.data.goals!["Weight gain"]!.calory!)}{" "}
              </span>
              (Calories/day)
            </p>
            <p>
              Extreme weight gain (1kg):{" "}
              <span>
                {Math.round(result.data.goals!["Extreme weight gain"]!.calory!)}{" "}
              </span>
              (Calories/day)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalorieCalc;
