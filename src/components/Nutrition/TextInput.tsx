import axios from "axios";
import { useState } from "react";
import Result from "./Result";
import "./nutrition.css";

const TextInput = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<FoodResult>();
  const url = `https://api.calorieninjas.com/v1/nutrition?query=${query}`;
  const config = {
    headers: {
      "X-Api-Key": "EsPjqbIcOgeWooBUAGJeQw==KIVvSyvnMfkGK7UR",
    },
  };

  const handleCLick = async () => {
    try {
      const response = await axios.get(url, config);
      setResult(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="wrapper">
      <div className="textSearch">
        <span className="title">
          <span className="text-yellow">Food </span>&{" "}
          <span className="text-yellow">Nutrition</span>
        </span>
        <input
          className="text-input"
          type="text"
          placeholder="Enter food name"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-btn" onClick={handleCLick}>
          Search
        </button>
      </div>
      {result && <Result data={result} />}
    </div>
  );
};

export default TextInput;
