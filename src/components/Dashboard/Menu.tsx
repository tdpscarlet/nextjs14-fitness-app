import gear from "@/assets/svg/gear-solid.svg";
import food from "@/assets/svg/bowl-food-solid.svg";
import exercise from "@/assets/svg/dumbbell-solid.svg";
import goal from "@/assets/svg/bullseye-solid.svg";
import chart from "@/assets/svg/chart-simple-solid.svg";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <Link
        href="/protected/dashboard"
        className="hover:bg-[--grey] border-transparent rounded-md cursor-pointer px-4 py-2"
      >
        <div className="opacity-70 flex gap-4 items-center">
          <img className="w-6 h-6" src={chart.src} alt="" />
          Dashboard
        </div>
      </Link>
      <div className="hover:bg-[--grey] border-transparent rounded-md cursor-pointer px-4 py-2">
        <div className="opacity-70 flex gap-4 items-center">
          <img className="w-6 h-6" src={exercise.src} alt="" />
          Exercise
        </div>
      </div>
      <div className="hover:bg-[--grey] border-transparent rounded-md cursor-pointer px-4 py-2">
        <div className="opacity-70 flex gap-4 items-center">
          <img className="w-6 h-6" src={food.src} alt="" />
          Food
        </div>
      </div>
      <Link
        href="/protected/goal"
        className="hover:bg-[--grey] border-transparent rounded-md cursor-pointer px-4 py-2"
      >
        <div className="opacity-70 flex gap-4 items-center">
          <img className="w-6 h-6" src={goal.src} alt="" />
          Goals
        </div>
      </Link>
      <div className="hover:bg-[--grey] border-transparent rounded-md cursor-pointer px-4 py-2">
        <div className="opacity-70 flex gap-4 items-center">
          <img className="w-6 h-6" src={gear.src} alt="" />
          Settings
        </div>
      </div>
    </div>
  );
};

export default Menu;
