"use client";

import NavBar from "@/components/NavBar";
import ImageInput from "@/components/Nutrition/ImageInput";
import TextInput from "@/components/Nutrition/TextInput";
import { useState } from "react";
import "../../components/Calculator/calculators.css";
import HomeMenu from "@/components/HomeMenu";

const NutritionPage = () => {
  const [title, setTitle] = useState("Text Search");
  const nutritions = ["Text Search", "Image Search"];

  return (
    <>
      <HomeMenu />
      <NavBar />
      <div className="mt-16">
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
      </div>
    </>
  );
};

export default NutritionPage;
