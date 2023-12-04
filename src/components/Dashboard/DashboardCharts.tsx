"use client";

import { PieChart } from "@mui/x-charts";
import { LineChart } from "@mui/x-charts/LineChart";

const DashboardCharts = () => {
  return (
    <div className=" mt-6 grid-wrap-2 gap-3">
      <div className="box-shadow bg-white py-10 px-6 border-[--light-grey] rounded-2xl">
        <div className="flex flex-col gap-2 w-full">
          <span className="text-lg font-bold">Calories Chart</span>
          <div className="flex gap-2 items-center self-end">
            <div className="w-3 h-3 bg-[#02d5d1] rounded-full"></div>
            <span className="text-sm text-gray-500">Calories Intake</span>
            <div className="w-3 h-3 bg-[--secondary] rounded-full ml-3"></div>
            <span className="text-sm text-gray-500">Calories Burned</span>
          </div>
          <LineChart
            xAxis={[
              {
                scaleType: "point",
                data: [
                  "4/12/2023",
                  "5/12/2023",
                  "6/12/2023",
                  "7/12/2023",
                  "8/12/2023",
                  "9/12/2023",
                  "10/12/2023",
                ],
              },
            ]}
            series={[
              {
                data: [2000, 2100, 1700, 2100, 2200, 1900, 2000],
                area: true,
              },
              {
                data: [1000, 530, 320, 200, 250, 300, 520],
                color: "#ff852a",
                area: true,
              },
            ]}
            height={300}
          />
        </div>
      </div>
      <div className="box-shadow bg-white py-10 px-6 border-[--light-grey] rounded-2xl">
        <div className="flex flex-col gap-2 w-full">
          <span className="text-lg font-bold">Nutrition Chart</span>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 65 },
                  { id: 1, value: 15 },
                  { id: 2, value: 20, color: "#ff852a" },
                ],
                innerRadius: 60,
                paddingAngle: 4,
                cx: 215,
              },
            ]}
            height={300}
          />
          <div className="flex gap-2 items-center self-end">
            <div className="w-3 h-3 bg-[#02d5d1] rounded-full"></div>
            <span className="text-sm text-gray-500">Carbohydrate</span>
            <div className="w-3 h-3 bg-[rgb(46,150,255)] rounded-full ml-3"></div>
            <span className="text-sm text-gray-500">Protein</span>
            <div className="w-3 h-3 bg-[--secondary] rounded-full ml-3"></div>
            <span className="text-sm text-gray-500">Fat</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
