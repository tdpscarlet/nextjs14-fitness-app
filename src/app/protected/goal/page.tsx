import getGoals from "@/app/actions/goals/getGoals";
import GoalHome from "@/components/Dashboard/Goal/GoalHome";
import GoalCreate from "@/components/Dashboard/Goal/GoalCreate";

const page = async () => {
  const goals = await getGoals();

  return (
    <>{!goals?.goal ? <GoalCreate /> : <GoalHome goals={goals?.goal!} />}</>
  );
};

export default page;
