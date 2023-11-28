import "./hamburger.css";
import HamburgerMenu from "./HamburgerMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import HeaderMenu from "./HeaderMenu";
const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-between lg:justify-end px-10 py-4 items-center mb-5 relative">
      {/* <div className="w-6 h-6 lg:hidden">
        <img className="w-full h-full" src={bars.src} alt="" />
      </div> */}
      <HamburgerMenu
        image={session?.user?.image as string}
        name={session?.user?.name as string}
      ></HamburgerMenu>
      <HeaderMenu
        image={session?.user?.image as string}
        name={session?.user?.name as string}
        email={session?.user?.email as string}
      ></HeaderMenu>
    </div>
  );
};

export default Header;
