"use client";

import React from "react";
import ExerciseItem from "./ExerciseItem";

interface IProps {
  currentItems: Exercise[];
}

const ExercisesList = ({ currentItems }: IProps) => {
  return (
    <div className="exercises-list grid grid-cols-[1fr_1fr_1fr] gap-5">
      {currentItems?.map((exercise: Exercise, index: number) => (
        <ExerciseItem data={exercise} key={index} />
      ))}
    </div>
  );
};

export default ExercisesList;
