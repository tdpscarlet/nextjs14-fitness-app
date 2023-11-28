"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FoodPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="mx-16 lg:mx-48">
      <div className="mb-7">
        <span className="text-2xl font-bold">Food Diary</span>
      </div>
      <div className="box-shadow flex flex-col gap-5 border-[--grey] rounded-lg bg-white px-10 lg:px-16 py-7">
        <div className="flex gap-2 text-xl">
          <span>Your diary for:</span>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
          />
        </div>
        <div className="flex flex-col w-fit">
          <span className="text-lg">Breakfast</span>
          <div className="bg-[rgb(33,43,54)] text-white px-4 py-2 font-bold border-transparent rounded-md">
            Add food
          </div>
        </div>
        <div className="flex flex-col w-fit">
          <span className="text-lg">Lunch</span>
          <div className="bg-[rgb(33,43,54)] text-white px-4 py-2 font-bold border-transparent rounded-md">
            Add food
          </div>
        </div>
        <div className="flex flex-col w-fit">
          <span className="text-lg">Dinner</span>
          <div className="bg-[rgb(33,43,54)] text-white px-4 py-2 font-bold border-transparent rounded-md">
            Add food
          </div>
        </div>
        <div className="flex flex-col w-fit">
          <span className="text-lg">Snacks</span>
          <div className="bg-[rgb(33,43,54)] text-white px-4 py-2 font-bold border-transparent rounded-md">
            Add food
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
