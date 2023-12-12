"use client";

import getFood from "@/app/actions/food/getFood";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FoodTable from "./FoodTable";
import FoodModal from "./FoodModal";
import rolling from "@/assets/svg/rolling-anim.svg";

const FoodDiary = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [food, setFood] = useState<Food[]>();
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  const [dayValue, setDayValue] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    if (isFirstTime) setLoading(true);
    const fetchData = async () => {
      try {
        const date = isFirstTime ? new Date() : startDate; //get current date when load on first time
        const formattedDate = `${date.getDate()}-${
          date.getMonth() + 1
        }-${date.getFullYear()}`;
        const foodData = await getFood(formattedDate);
        setFood(foodData as Food[]);
        setDayValue(formattedDate);
        setIsFirstTime(false);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

    console.log(food);
    console.log(startDate);
    console.log(isFirstTime);
    console.log(dayValue);
  }, [startDate, flag]);

  return (
    <>
      <div className="mx-16 lg:mx-48">
        <div className="mb-7">
          <span className="text-2xl font-bold">Food Diary</span>
        </div>
        <div className="box-shadow flex flex-col gap-5 border-[--grey] rounded-lg bg-white px-10 lg:px-16 py-7">
          <div className="flex gap-2 text-xl self-center items-center">
            <span>Your diary for: {days[startDate.getDay()]}</span>
            <div className="w-3 h-3 border-transparent rounded-full bg-[--primary]"></div>
            <div className="cursor-pointer">
              <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={startDate}
                onChange={(date: Date) => {
                  setStartDate(date);
                  setLoading(true);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-lg">Breakfast</span>
            {loading ? (
              <img className="w-10 self-center" src={rolling.src} />
            ) : (
              <>
                {food?.find((item) => item.meal === "breakfast") && (
                  <FoodTable food={food} meal="breakfast" />
                )}
              </>
            )}
            <FoodModal
              value={dayValue}
              meal="breakfast"
              flag={flag}
              setFlag={setFlag}
            />
          </div>
          <div className="border w-full border-dashed"></div>
          <div className="flex flex-col gap-3">
            <span className="text-lg">Lunch</span>
            {loading ? (
              <img className="w-10 self-center" src={rolling.src} />
            ) : (
              <>
                {food?.find((item) => item.meal === "lunch") && (
                  <FoodTable food={food} meal="lunch" />
                )}
              </>
            )}
            <FoodModal
              value={dayValue}
              meal="lunch"
              flag={flag}
              setFlag={setFlag}
            />
          </div>
          <div className="border w-full border-dashed"></div>
          <div className="flex flex-col gap-3">
            <span className="text-lg">Dinner</span>
            {loading ? (
              <img className="w-10 self-center" src={rolling.src} />
            ) : (
              <>
                {food?.find((item) => item.meal === "dinner") && (
                  <FoodTable food={food} meal="dinner" />
                )}
              </>
            )}
            <FoodModal
              value={dayValue}
              meal="dinner"
              flag={flag}
              setFlag={setFlag}
            />
          </div>
          <div className="border w-full border-dashed"></div>

          <div className="flex flex-col gap-3">
            <span className="text-lg">Snacks</span>
            {loading ? (
              <img className="w-10 self-center" src={rolling.src} />
            ) : (
              <>
                {food?.find((item) => item.meal === "snacks") && (
                  <FoodTable food={food} meal="snacks" />
                )}
              </>
            )}
            <FoodModal
              value={dayValue}
              meal="snacks"
              flag={flag}
              setFlag={setFlag}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDiary;
