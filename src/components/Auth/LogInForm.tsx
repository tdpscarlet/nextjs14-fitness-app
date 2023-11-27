"use client";

import { DM_Sans } from "next/font/google";
import googleIcon from "@/assets/svg/google.svg";
import facebookIcon from "@/assets/svg/facebook.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const dmSans = DM_Sans({ subsets: ["latin"] });

const LogInForm = () => {
  const { status } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async () => {
    setMessage("Logging In...");
    try {
      const signInResponse = await signIn("credentials", {
        email,
        password,
        redirect: false, //Don't need to redirect cause already have in useEffect
      });
      console.log(signInResponse?.error);
      if (!signInResponse || signInResponse.ok !== true) {
        setMessage("Invalid credentials");
      } else {
        router.refresh();
      }
    } catch (err) {
      console.log(err);
    }
    setMessage(message);
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.refresh(); //Get a new session on the server side
      router.push("/protected/dashboard"); //Redirect to dashboard
    }
  }, [status, router]);

  return (
    <div className="flex flex-col items-start border rounded-lg p-7 gap-5 shadow-lg">
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
      <span className="text-sm text-[--primary]">Forgot password?</span>
      <button
        className={`${dmSans.className} banner-btn w-fit bg-[--primary] text-white flex items-center gap-[50px] cursor-pointer z-[2] px-16 py-2 rounded-lg border-[none] self-center`}
        onClick={() => handleSubmit()}
      >
        Log In
      </button>
      <div className="flex flex-row items-center gap-1 w-full">
        <div className="border h-[1px] w-full"></div>
        <span className="w-full text-sm text-center">or login with</span>
        <div className="border h-[1px] w-full"></div>
      </div>
      <div className="flex flex-row justify-center items-center w-full gap-3">
        <img
          className="h-10 cursor-pointer"
          src={googleIcon.src}
          alt=""
          onClick={() =>
            signIn("google", {
              callbackUrl: "/protected/dashboard",
            })
          }
        />
        <img
          className="h-10 cursor-pointer"
          src={facebookIcon.src}
          alt=""
          onClick={() =>
            signIn("facebook", {
              callbackUrl: "/protected/dashboard",
            })
          }
        />
      </div>
      <span className="text-sm">
        Not a member?
        <Link href="/auth/signup" className="text-[--primary]">
          {" "}
          Sign Up
        </Link>
      </span>
      <span>{message}</span>
    </div>
  );
};

export default LogInForm;
