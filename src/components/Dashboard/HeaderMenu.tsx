"use client";

import avatar from "@/assets/img/User-avatar.jpg";
import { Modal } from "@mui/material";
import { signOut } from "next-auth/react";
import { useState } from "react";

interface IProps {
  email: string;
  name: string;
  image: string;
}

const HeaderMenu = ({ email, name, image }: IProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className="flex w-9 h-9 justify-center items-center border-2 rounded-full overflow-hidden cursor-pointer"
        onClick={handleOpen}
      >
        {!image ? (
          <img className="w-full h-full object-cover" src={avatar.src} alt="" />
        ) : (
          <img className="w-full h-full object-cover" src={image} alt="" />
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
      >
        <div className="flex flex-col focus: outline-none absolute top-16 right-10 border-transparent rounded-xl shadow-lg bg-white">
          <div className="flex flex-col px-5 py-4">
            <span className="text-sm font-semibold">{name}</span>
            <span className="text-sm text-gray-500">{email}</span>
          </div>
          <div className="border-b border-dashed h-[1px] w-full"></div>
          <span
            className="text-sm px-5 py-4 text-[--secondary] cursor-pointer"
            onClick={() =>
              signOut({
                callbackUrl: "/",
                redirect: true,
              })
            }
          >
            Log Out
          </span>
        </div>
      </Modal>
    </>
  );
};

export default HeaderMenu;
