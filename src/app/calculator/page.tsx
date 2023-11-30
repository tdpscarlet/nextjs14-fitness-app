"use client";

import BmiCalc from "@/components/Calculator/BmiCalc";
import BodyFatCalc from "@/components/Calculator/BodyFatCalc";
import CalorieCalc from "@/components/Calculator/CalorieCalc";
import IdealCalc from "@/components/Calculator/IdealCalc";
import MacroCalc from "@/components/Calculator/MacroCalc";
import React, { useState } from "react";
import { DM_Sans } from "next/font/google";
import NavBar from "@/components/NavBar";
import HomeMenu from "@/components/HomeMenu";

const dmSans = DM_Sans({ subsets: ["latin"] });

const CalculatorPage = () => {
  const [calcName, setCalcName] = useState("Calorie Calculator");
  const calcs = [
    "Calorie Calculator",
    "BMI Calculator",
    "Macros Calculator",
    "Body Fat Calculator",
    "Ideal Weight Calculator",
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCalcName(e.currentTarget.value);
  };

  return (
    <>
      <NavBar />
      <HomeMenu />
      <div className="calculator wrapper mt-16">
        <div className="flex gap-3 flex-col md:flex-row justify-evenly bg-[rgba(86,177,211,0.1)] px-0 py-5">
          {calcs.map((calc, index) => (
            <button
              className={
                calc === calcName
                  ? `${dmSans.className} calc-btn active bg-transparent text-black cursor-pointer text-lg p-0 border-[none]`
                  : `${dmSans.className} calc-btn bg-transparent text-black cursor-pointer text-lg p-0 border-[none]`
              }
              onClick={handleClick}
              key={index}
              value={calc}
            >
              {calc}
            </button>
          ))}
        </div>
        <div className="calc-detail md:mx-4">
          {calcName === "Calorie Calculator" ? (
            <CalorieCalc />
          ) : calcName === "BMI Calculator" ? (
            <BmiCalc />
          ) : calcName === "Macros Calculator" ? (
            <MacroCalc />
          ) : calcName === "Body Fat Calculator" ? (
            <BodyFatCalc />
          ) : (
            <IdealCalc />
          )}
        </div>
      </div>
    </>
  );
};

export default CalculatorPage;
