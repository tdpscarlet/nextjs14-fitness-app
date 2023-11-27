"use client";

import edit from "@/assets/svg/icons8-edit.svg";
import Link from "next/link";

interface IProps {
  goals: {
    id: string;
    calo: number;
    carb: number;
    protein: number;
    fat: number;
    userId: string;
  };
}

const GoalHome = (props: IProps) => {
  const { calo, protein, fat, carb } = props.goals;

  const carbCalc = Math.ceil((calo * (carb / 100)) / 4);
  const fatCalc = Math.ceil((calo * (fat / 100)) / 9);
  const proteinCalc = Math.ceil((calo * (protein / 100)) / 4);

  return (
    <div className="mx-16 lg:mx-48">
      <div className="flex flex-row justify-between mb-7 items-center">
        <span className="text-2xl font-bold">Nutrition Goals</span>
        <Link
          href={"/protected/goal/edit"}
          className="flex flex-row gap-3 bg-[rgb(33,43,54)] text-white text-center px-4 py-2 font-bold border-transparent rounded-md"
        >
          <img className="w-5 h-5" src={edit.src} alt="" />
          Edit
        </Link>
      </div>
      <div className="box-shadow flex flex-row justify-between border-[--grey] rounded-lg bg-white px-10 lg:px-16 py-7">
        <div className="flex flex-col justify-center gap-4">
          <span>Calories</span>
          <span>Carbohydrates</span>
          <span>Fat</span>
          <span>Protein</span>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <span>{calo}</span>
          <span>{carbCalc}g</span>
          <span>{fatCalc}g</span>
          <span>{proteinCalc}g</span>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <span>N/A</span>
          <span>{carb}%</span>
          <span>{fat}%</span>
          <span>{protein}%</span>
        </div>
      </div>
    </div>
  );
};

export default GoalHome;
