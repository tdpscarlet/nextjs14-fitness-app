"use client";

import Link from "next/link";
import React from "react";

interface IProps {
  data: Exercise;
  key: number;
}

const ExerciseItem = ({ data }: IProps) => {
  return (
    <div className="exerciseItem border overflow-hidden p-5 rounded-[10px] border-solid border-[rgba(131,131,131,0.4)]">
      <Link href={`/exercises/${data.id}`}>
        <img
          className="exercise-Img w-full"
          src={data.gifUrl}
          alt={data.name}
        />
        <div className="exercise-tag flex gap-2.5">
          <span className="exercise-bodyPart capitalize bg-[--primary] text-white flex text-center items-center px-5 py-[5px] rounded-[40px]">
            {data.bodyPart}
          </span>
          <span className="exercise-target capitalize bg-[--primary] text-white flex text-center items-center px-5 py-[5px] rounded-[40px]">
            {data.target}
          </span>
        </div>
        <span className="exercise-name capitalize inline-block text-xl mt-2.5">
          {data.name}
        </span>
      </Link>
    </div>
  );
};

export default ExerciseItem;
