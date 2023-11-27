"use client";

import React from "react";

const Footer = () => {
  return (
    <div
      className="footer flex flex-col justify-center items-center gap-8 mt-[60px] px-5 py-16"
      style={{ background: "rgba(170, 216, 233, 0.45)" }}
    >
      <span className="footerTitle text-[--primary] text-[34px] not-italic font-bold leading-[normal] tracking-[0.085px]">
        HI! How can <span className="text-[--secondary]">we help </span>you?
      </span>
      <span className="footerDesc text-[--text] text-base not-italic font-normal leading-[normal] tracking-[0.04px]">
        subscribe your email to get special offering from us
      </span>
      <div className="footerInput grid grid-cols-[repeat(auto-fit,minmax(10px,max-content))]">
        <input
          className="w-[455px] pl-5 pr-[135px] py-0 rounded-[40px] border-[none] outline-none bg-[#fff]"
          type="text"
          placeholder="Enter your email"
        />
        <button
          className="text-white cursor-pointer px-6 py-3 rounded-[40px] border-[none]"
          style={{ background: "var(--primary)" }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Footer;
