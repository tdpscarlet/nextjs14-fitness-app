"use client";

import React from "react";
import bars from "@/assets/svg/bars-solid.svg";
import { slide as MenuRes } from "react-burger-menu";
import Menu from "./Menu";
import logo from "@/assets/img/logo.png";
import avatar from "@/assets/img/User-avatar.jpg";

interface IProps {
  image: string;
  name: string;
}

const HamburgerMenu = ({ image, name }: IProps) => {
  return (
    <div className="lg:hidden">
      <MenuRes customBurgerIcon={<img src={bars.src} alt="" />}>
        <div>
          <img className="w-28" src={logo.src} alt="" />
          <div className="flex flex-row items-center gap-4 px-5 py-4 bg-[rgba(145,158,171,0.12)] my-6 rounded-xl">
            <div className="flex w-10 h-10 justify-center items-center border-transparent rounded-full overflow-hidden">
              {!image ? (
                <img
                  className="w-full h-full object-cover"
                  src={avatar.src}
                  alt=""
                />
              ) : (
                <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt=""
                />
              )}
            </div>
            <span>{name}</span>
          </div>
          <Menu />
        </div>
      </MenuRes>
    </div>
  );
};

export default HamburgerMenu;
