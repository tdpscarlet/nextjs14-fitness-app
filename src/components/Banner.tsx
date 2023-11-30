"use client";

import rightArrow from "@/assets/svg/right-arrow.svg";
import banner from "@/assets/img/banner.png";
import { Concert_One, DM_Sans } from "next/font/google";
import Link from "next/link";

const concertOne = Concert_One({ subsets: ["latin"], weight: "400" });
const dmSans = DM_Sans({ subsets: ["latin"] });

const Banner = () => {
  return (
    <div className="banner flex flex-row items-center justify-center relative mt-20 mb-10 mx-5 lg:mx-auto">
      <div className="banner-text flex flex-col w-[461px]">
        <span
          className={`${concertOne.className} not-italic font-normal text-4xl lg:text-5xl leading-8 lg:leading-10 tracking-[0.145em] z-[2] mb-6`}
        >
          Change your
        </span>
        <span
          className={`${concertOne.className} not-italic font-normal text-4xl lg:text-5xl leading-8 lg:leading-10 tracking-[0.145em] z-[2] mb-6 text-[--primary]`}
        >
          habits
        </span>
        <span
          className={`${concertOne.className} not-italic font-normal text-4xl lg:text-5xl leading-8 lg:leading-10 tracking-[0.145em] z-[2] mb-6`}
        >
          Level up your
        </span>
        <span
          className={`${concertOne.className} not-italic font-normal text-4xl lg:text-5xl leading-8 lg:leading-10 tracking-[0.145em] z-[2] mb-6 text-[--secondary]`}
        >
          life quality
        </span>
        <span className="banner-subtitle z-[2] mt-2 mb-8">
          always take care of your daily habits, make your life more healty,
          more fit
        </span>
        <Link
          href="/auth/signup"
          className={`${dmSans.className} banner-btn w-fit bg-[--primary] text-white flex items-center gap-[50px] cursor-pointer z-[2] px-4 py-3 rounded-lg border-[none]`}
        >
          Get Started <img src={rightArrow.src} alt="" />
        </Link>
        <span className="text-behind absolute w-[514px] h-[468px] left-[-300px] font-bold text-[120px] leading-[156px] tracking-[0.08em] text-[rgba(86,177,211,0.1)] cursor-default z-[1] select-none top-40">
          Good Habbits good life
        </span>
      </div>
      <img
        className="banner-image hidden md:block md:w-96 lg:w-auto"
        src={banner.src}
        alt="banner"
      />
    </div>
  );
};

export default Banner;
