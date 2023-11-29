"use client";

import { DM_Sans } from "next/font/google";
import googleIcon from "@/assets/svg/google.svg";
import facebookIcon from "@/assets/svg/facebook.svg";
import Link from "next/link";
import React, { useState } from "react";
import { signUp } from "@/app/actions/users/signUp";
import { Alert, Snackbar } from "@mui/material";
import { useRouter } from "next/navigation";

const dmSans = DM_Sans({ subsets: ["latin"] });

const SignUpForm = () => {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const [err, setErr] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const openToast = (message: string) => {
    setErr(message);
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async () => {
    setMessage("Signing up...");
    const message = await signUp(email, name, password);
    setMessage(message);
    router.push("/auth/login");
  };

  const handleClick = () => {
    if (name.length < 6 || name.length > 20)
      openToast("Name length must between 6 and 20");
    else if (!/^[a-zA-Z0-9]+$/.test(name))
      openToast(
        "Name should not contain any special characters or white space"
      );
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      openToast("Please enter valid email");
    else if (password.length < 8 || password.length > 16)
      openToast("Password length must between 8 and 16");
    else if (confirm !== password) openToast("Password do not match");
    else handleSubmit();
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
        value={confirm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setConfirm(e.target.value)
        }
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
        onClick={() => handleClick()}
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
        {/* <img className="h-10 cursor-pointer" src={facebookIcon.src} alt="" /> */}
      </div>
      <span>{message}</span>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="error" onClose={handleClose} sx={{ width: "100%" }}>
          {err}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SignUpForm;
