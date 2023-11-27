"use client";

import { useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ExercisesList from "./ExercisesList";
import "@/assets/css/paginatedItems.css";

const PaginatedItems = () => {
  const search = useAppSelector<string>((state) => state.exercisesList.search);
  const exercises = useAppSelector<Exercise[]>(
    (state) => state.exercisesList.exercises
  );
  const bodyPart = useAppSelector<string>(
    (state) => state.exercisesList.bodyPart
  );

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  const bodyPartExercises = exercises?.filter((exercise) => {
    if (bodyPart != "all") return exercise.bodyPart.includes(bodyPart);
    else return exercises;
  });

  const searchExercises = bodyPartExercises?.filter((exercise) => {
    if (search !== "") {
      return (
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
      );
    } else return bodyPartExercises;
  });

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = searchExercises.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(searchExercises.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % searchExercises.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    setItemOffset(newOffset);
  };

  return (
    <div className="paginatedItems">
      <ExercisesList currentItems={currentItems} />
      <ReactPaginate
        className="react-paginate"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default PaginatedItems;
