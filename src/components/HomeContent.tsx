"use client";

import dumbbell from "@/assets/img/Dumbbell.png";
import yoga from "@/assets/img/Yoga Skin Type 2.png";
import fitness from "@/assets/img/Plank.png";
import muscle from "@/assets/img/Rowing Machine.png";
import { getServerSession } from "next-auth";

const HomeContent = () => {
  return (
    <div>
      <div className="content flex flex-col justify-center items-center">
        <div className="offers flex items-center p-4">
          <div className="offersTitle grid text-2xl leading-[normal] grid-rows-[2em_1em_2em] grid-cols-[3em_2em_3em]">
            <span className="title1 col-[1_/_span_2] row-[1_/_span_2]">
              Training program
            </span>
            <img
              className="offersImg col-[3] row-[1_/_span_2]"
              src={dumbbell.src}
              alt=""
            />
            <span className="title2 col-[1_/_span_3] row-[3]">
              we offer to you
            </span>
          </div>
          <div
            className="offersItems flex gap-6 items-center p-4 rounded-lg"
            style={{
              background:
                "linear-gradient(180deg,rgba(34, 195, 255, 0.14) 0%,rgba(54, 183, 231, 0.11) 73.05%,rgba(86, 177, 211, 0) 100%)",
            }}
          >
            <div className="offersItem grid grid-cols-[6em_5em_5em]">
              <span className="itemTitle col-[1_/_span_2] row-[1_span_/_2] font-bold">
                Yoga
              </span>
              <img
                src={yoga.src}
                className="itemImg col-[3] row-[1_/_span_2]"
                alt=""
              />
              <span className="itemDesc col-[1_/_span_3] row-[3]">
                enjoy yoga for all level body elastic, body weight, and many
                more
              </span>
            </div>
            <div className="breakline bg-[#256c87] h-[81px] w-px"></div>
            <div className="offersItem grid grid-cols-[6em_5em_5em]">
              <span className="itemTitle col-[1_/_span_2] row-[1_span_/_2] font-bold">
                Fitness
              </span>
              <img
                src={fitness.src}
                className="itemImg col-[3] row-[1_/_span_2]"
                alt=""
              />
              <span className="itemDesc col-[1_/_span_3] row-[3]">
                regular strength training improve the health of your bones and
                muscles
              </span>
            </div>
            <div className="breakline bg-[#256c87] h-[81px] w-px"></div>
            <div className="offersItem grid grid-cols-[6em_5em_5em]">
              <span className="itemTitle col-[1_/_span_2] row-[1_span_/_2] font-bold">
                Muscle
              </span>
              <img
                src={muscle.src}
                className="itemImg col-[3] row-[1_/_span_2]"
                alt=""
              />
              <span className="itemDesc col-[1_/_span_3] row-[3]">
                enjoy all muscles exercise in every level, make your abs dream
                come true
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
