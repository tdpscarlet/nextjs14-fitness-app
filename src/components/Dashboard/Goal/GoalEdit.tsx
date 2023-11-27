"use client";

import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Link from "next/link";
import edit from "@/assets/svg/icons8-edit.svg";
import editGoals from "@/app/actions/goals/editGoals";
import { useRouter } from "next/navigation";

interface IProps {
  goal: {
    id: string;
    calo: number;
    carb: number;
    protein: number;
    fat: number;
    userId: string;
  };
}

const GoalEdit = (props: IProps) => {
  const { goal } = props;
  const router = useRouter();

  const [carb, setCarb] = useState(goal.carb);
  const [fat, setFat] = useState(goal.fat);
  const [protein, setProtein] = useState(goal.protein);
  const [calo, setCalo] = useState(goal.calo);
  const [message, setMessage] = useState<string>("");

  const carbCalc = Math.ceil((calo * (carb / 100)) / 4);
  const fatCalc = Math.ceil((calo * (fat / 100)) / 9);
  const proteinCalc = Math.ceil((calo * (protein / 100)) / 4);

  const range = [
    0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
    95, 100,
  ];

  const handleSubmit = async () => {
    setMessage("Saving...");
    const message = await editGoals(carb, fat, protein, calo, goal.userId);
    setMessage(message);
    router.push("/protected/goal");
  };

  return (
    <>
      <div className="flex flex-row justify-between mb-7 items-center">
        <span className="text-2xl font-bold">Nutrition Goals</span>
        <div className="flex flex-row gap-5">
          <Link
            href="/protected/goal"
            className="flex flex-row gap-3 bg-[rgb(33,43,54)] text-white text-center px-4 py-2 font-bold border-transparent rounded-md"
          >
            <img className="w-5 h-5" src={edit.src} alt="" />
            Back
          </Link>
          <div
            className="flex flex-row cursor-pointer gap-3 bg-[rgb(33,43,54)] text-white text-center px-4 py-2 font-bold border-transparent rounded-md"
            onClick={() => handleSubmit()}
          >
            <img className="w-5 h-5" src={edit.src} alt="" />
            Save
          </div>
        </div>
      </div>
      <div className="box-shadow flex flex-row justify-between border-[--grey] rounded-lg bg-white px-10 lg:px-16 py-7">
        <div className="flex flex-col justify-center gap-4">
          <span>Calories</span>
          <span>Carbohydrates</span>
          <span>Fat</span>
          <span>Protein</span>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <input
            className="w-20 h-10 pl-3 border rounded-md"
            type="number"
            value={calo}
            onChange={(e) => setCalo(parseInt(e.target.value) as number)}
          />
          <span>{carbCalc}g</span>
          <span>{fatCalc}g</span>
          <span>{proteinCalc}g</span>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <span>N/A</span>
          <Select
            className="w-20 h-10"
            value={carb}
            onChange={(e) => setCarb(e.target.value as number)}
          >
            {range.map((percent) => {
              return <MenuItem value={percent}>{percent}%</MenuItem>;
            })}
          </Select>
          <Select
            className="w-20 h-10"
            value={fat}
            onChange={(e) => setFat(e.target.value as number)}
          >
            {range.map((percent) => {
              return <MenuItem value={percent}>{percent}%</MenuItem>;
            })}
          </Select>
          <Select
            className="w-20 h-10"
            value={protein}
            onChange={(e) => setProtein(e.target.value as number)}
          >
            {range.map((percent) => {
              return <MenuItem value={percent}>{percent}%</MenuItem>;
            })}
          </Select>
        </div>
      </div>
      {message}
    </>
  );
};

export default GoalEdit;
