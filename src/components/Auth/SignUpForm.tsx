"use client";

import { DM_Sans } from "next/font/google";
import googleIcon from "@/assets/svg/google.svg";
import facebookIcon from "@/assets/svg/facebook.svg";
import Link from "next/link";
import React, { useState } from "react";
import { signUp } from "@/app/actions/users/signUp";

const dmSans = DM_Sans({ subsets: ["latin"] });

const SignUpForm = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async () => {
    setMessage("Signing up...");
    const message = await signUp(email, name, password);
    setMessage(message);
  };

  return (
    <div className="flex flex-col items-start border rounded-lg p-7 gap-5 shadow-lg">
      <input
        className="px-3 py-2 w-80 border rounded-lg"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <input
        className="px-3 py-2 w-80 border rounded-lg"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <input
        className="px-3 py-2 w-80 border rounded-lg"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <input
        className="px-3 py-2 w-80 border rounded-lg"
        type="password"
        placeholder="Confirm password"
      />
      <span className="text-sm">
        Already a member?
        <Link href="/auth/login" className="text-[--primary]">
          {" "}
          Log In
        </Link>
      </span>
      <button
        className={`${dmSans.className} banner-btn w-fit bg-[--primary] text-white flex items-center gap-[50px] cursor-pointer z-[2] px-16 py-2 rounded-lg border-[none] self-center`}
        onClick={() => handleSubmit()}
      >
        Sign Up
      </button>
      <div className="flex flex-row items-center gap-1 w-full">
        <div className="border h-[1px] w-full"></div>
        <span className="w-full text-sm text-center">or sign up with</span>
        <div className="border h-[1px] w-full"></div>
      </div>
      <div className="flex flex-row justify-center items-center w-full gap-3">
        <img className="h-10 cursor-pointer" src={googleIcon.src} alt="" />
        <img className="h-10 cursor-pointer" src={facebookIcon.src} alt="" />
      </div>
      <span>{message}</span>
    </div>
  );
};

export default SignUpForm;
