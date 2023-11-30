"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import rolling from "@/assets/svg/rolling-anim.svg";
import { AppDispatch, useAppSelector } from "@/redux/store";
import {
  fetchAsyncExercises,
  filterExercises,
  searchExercises,
} from "@/redux/features/exercisesSlice";
import PaginatedItems from "@/components/Exercises/PaginatedItems";
import NavBar from "@/components/NavBar";
import HomeMenu from "@/components/HomeMenu";

const ExercisePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const search = useAppSelector<string>((state) => state.exercisesList.search);
  const exercises = useAppSelector<Exercise[]>(
    (state) => state.exercisesList.exercises
  );
  const bodyPart = useAppSelector<string>(
    (state) => state.exercisesList.bodyPart
  );
  const bodyTexts: string[] = [
    "all",
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];

  useEffect(() => {
    dispatch(fetchAsyncExercises());
  }, [dispatch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchExercises(e.target.value));
  };

  const handleFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(filterExercises(e.currentTarget.value));
  };

  return (
    <>
      <NavBar />
      <HomeMenu />
      <div className="exercises wrapper flex flex-col justify-center items-center">
        <div className="searchBar flex flex-col items-center gap-[50px] mt-20 lg:mt-10 mb-[30px]">
          <span className="text-[34px] leading-[44px] tracking-[0.0025em] font-bold text-[--primary]">
            <span className="text-[--secondary]">Looking</span> for exercises?
          </span>
          <input
            className="md:w-[500px] w-80 h-[45px] border text-[inherit] font-[inherit] px-[30px] py-0 rounded-[40px] border-solid border-[black]"
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
          <div className="bodyParts flex justify-center flex-wrap gap-2.5">
            {bodyTexts.map((bodyText: string, index: number) => (
              <button
                className={
                  bodyText === bodyPart
                    ? "active border-[--dark-blue] bg-transparent capitalize cursor-pointer p-2.5 rounded-[10px] border-2 border-solid"
                    : "border-[--dark-blue] bg-transparent text-[--primary] capitalize cursor-pointer p-2.5 rounded-[10px] border-2 border-solid"
                }
                value={bodyText}
                onClick={handleFilter}
                key={index}
              >
                {bodyText}
              </button>
            ))}
          </div>
        </div>
        {Object.keys(exercises).length === 0 ? (
          <img src={rolling.src} alt="" loading="lazy" />
        ) : (
          <PaginatedItems />
        )}
      </div>
    </>
  );
};

export default ExercisePage;
