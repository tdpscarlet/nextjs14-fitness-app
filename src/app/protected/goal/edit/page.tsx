import React from "react";
import getGoals from "@/app/actions/goals/getGoals";
import GoalEdit from "@/components/Dashboard/Goal/GoalEdit";

const page = async () => {
  const goals = await getGoals();
  return (
    <div className="mx-16 lg:mx-48">
      <GoalEdit goal={goals?.goal!} />
    </div>
  );
};

export default page;
