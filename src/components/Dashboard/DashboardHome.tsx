import fire from "@/assets/svg/fire-solid.svg";
import streak from "@/assets/svg/bolt-lightning-solid.svg";
import scale from "@/assets/svg/weight-scale-solid.svg";
import up from "@/assets/svg/arrow-trend-up-solid.svg";
import getGoals from "@/app/actions/goals/getGoals";
import "./DashboardHome.css";
import Link from "next/link";

const DashboardHome = async () => {
  const goals = await getGoals();

  return (
    <div className="p-6 grid-wrap">
      <div className="flex flex-row gap-3 items-center box-shadow bg-white py-10 px-6 border-[--light-grey] rounded-2xl">
        <img className="w-11 h-11 opacity-80" src={streak.src} alt="" />
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-500">Calories Remaining</span>
          <span className="text-2xl font-bold">
            {!goals?.goal?.calo ? (
              <div>
                <Link className="text-[--primary]" href="/protected/goal">
                  Unset (Go to Goals)
                </Link>
              </div>
            ) : (
              goals.goal.calo
            )}
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center box-shadow bg-white py-10 px-6 border-[--light-grey] rounded-2xl">
        <img className="w-11 h-11 opacity-80" src={fire.src} alt="" />
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-500">Day Streak</span>
          <span className="text-2xl font-bold">4</span>
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center box-shadow bg-white py-10 px-6 border-[--light-grey] rounded-2xl">
        <img className="w-11 h-11 opacity-80" src={scale.src} alt="" />
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-500">Current Weight</span>
          <span className="text-2xl font-bold">50 kgs</span>
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center box-shadow bg-white py-10 px-6 border-[--light-grey] rounded-2xl">
        <img className="w-11 h-11 opacity-80" src={up.src} alt="" />
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-500">Kg Gained</span>
          <span className="text-2xl font-bold">5</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
