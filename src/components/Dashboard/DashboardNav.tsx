import logo from "@/assets/img/logo.png";
import Menu from "./Menu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

const DashboardNav = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-72 flex-shrink-0 hidden lg:block">
      <div className="flex flex-col sticky w-72 h-full border-r border-dashed px-5 py-8">
        <Link href="/">
          <img className="w-28 cursor-pointer" src={logo.src} alt="" />
        </Link>
        <div className="flex flex-row items-center gap-4 px-5 py-4 bg-[rgba(145,158,171,0.12)] my-6 rounded-xl">
          <div className="flex w-10 h-10 justify-center items-center border-transparent rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={session?.user?.image as string}
            />
          </div>
          <span>{session?.user?.name as string}</span>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default DashboardNav;
