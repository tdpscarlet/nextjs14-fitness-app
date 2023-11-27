"use client";

import createGoals from "@/app/actions/goals/createGoals";
import { useRouter } from "next/navigation";

const GoalCreate = () => {
  const router = useRouter();
  const handleCreate = async () => {
    try {
      await createGoals();
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <span
        className="bg-[rgb(33,43,54)] text-white text-center px-4 py-2 font-bold border-transparent rounded-md cursor-pointer"
        onClick={() => handleCreate()}
      >
        Create Goals
      </span>
    </div>
  );
};

export default GoalCreate;
