"use client";

import logo from "@/assets/img/logo.png";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const { status } = useSession();

  const handleLogOut = () => {
    signOut({
      callbackUrl: "/",
      redirect: true,
    });
  };

  return (
    <div className="navBar hidden lg:flex flex-row justify-center items-center gap-[190px] mt-[49px]">
      <Link href="/">
        <img className="logo w-28" src={logo.src} alt="logo" />
      </Link>
      <div className="nav-list flex flex-row justify-center items-center gap-10">
        <Link href="/" className={pathname == "/" ? "active" : ""}>
          <span className="nav-item cursor-pointer text-center">Home</span>
        </Link>
        <Link
          href="/exercises"
          className={pathname == "/exercises" ? "active" : ""}
        >
          <span className="nav-item cursor-pointer text-center">Exercises</span>
        </Link>
        <Link
          href="/calculator"
          className={pathname == "/calculator" ? "active" : ""}
        >
          <span className="nav-item cursor-pointer text-center">
            Calculator
          </span>
        </Link>
        <Link
          href="/nutrition"
          className={pathname == "/nutrition" ? "active" : ""}
        >
          <span className="nav-item cursor-pointer text-center">Nutrition</span>
        </Link>
        <Link
          href="/protected/dashboard"
          className="nav-item cursor-pointer text-center"
        >
          Dashboard
        </Link>
      </div>
      {status === "authenticated" ? (
        <button
          className="nav-btn border-[--dark-blue] text-[--dark-blue] bg-transparent cursor-pointer px-4 py-2.5 rounded-lg border-2 border-solid"
          onClick={() => handleLogOut()}
        >
          Log Out
        </button>
      ) : (
        <Link
          href="/auth/login"
          className="nav-btn border-[--dark-blue] text-[--dark-blue] bg-transparent cursor-pointer px-4 py-2.5 rounded-lg border-2 border-solid"
        >
          Log In
        </Link>
      )}
    </div>
  );
};

export default NavBar;
