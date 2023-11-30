"use client";

import { slide as MenuRes } from "react-burger-menu";
import bars from "@/assets/svg/bars-solid.svg";
import "./homeMenu.css";
import Link from "next/link";
import logo from "@/assets/img/logo.png";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const HomeMenu = () => {
  const pathname = usePathname();
  const { status } = useSession();

  const handleLogOut = () => {
    signOut({
      callbackUrl: "/",
      redirect: true,
    });
  };

  return (
    <div className="lg:hidden w-full bg-gray-200 h-16 fixed top-0 z-10">
      <MenuRes customBurgerIcon={<img src={bars.src} alt="" />}>
        <div className="navBar flex flex-col">
          <Link href="/">
            <img className="logo w-28" src={logo.src} alt="logo" />
          </Link>
          <div className="nav-list flex flex-col gap-5 my-10 ">
            <Link href="/" className={pathname == "/" ? "active" : ""}>
              <span className="nav-item cursor-pointer">Home</span>
            </Link>
            <Link
              href="/exercises"
              className={pathname == "/exercises" ? "active" : ""}
            >
              <span className="nav-item cursor-pointer">Exercises</span>
            </Link>
            <Link
              href="/calculator"
              className={pathname == "/calculator" ? "active" : ""}
            >
              <span className="nav-item cursor-pointer">Calculator</span>
            </Link>
            <Link
              href="/nutrition"
              className={pathname == "/nutrition" ? "active" : ""}
            >
              <span className="nav-item cursor-pointer">Nutrition</span>
            </Link>
            <Link
              href="/protected/dashboard"
              className="nav-item cursor-pointer"
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
      </MenuRes>
    </div>
  );
};

export default HomeMenu;
