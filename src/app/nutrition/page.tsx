"use client";

import NavBar from "@/components/NavBar";
import ImageInput from "@/components/Nutrition/ImageInput";
import TextInput from "@/components/Nutrition/TextInput";
import { useState } from "react";
import "../../components/Calculator/calculators.css";

const NutritionPage = () => {
  const [title, setTitle] = useState("Text Search");
  const nutritions = ["Text Search", "Image Search"];

  return (
    <>
      <NavBar />
      <div className="calc-category wrapper">
        {nutritions.map((item, index) => (
          <button
            className={item === title ? "calc-btn active" : "calc-btn"}
            onClick={(e) => setTitle(e.currentTarget.value)}
            key={index}
            value={item}
          >
            {item}
          </button>
        ))}
      </div>
      {title === "Text Search" ? <TextInput /> : <ImageInput />}
    </>
  );
};

export default NutritionPage;
