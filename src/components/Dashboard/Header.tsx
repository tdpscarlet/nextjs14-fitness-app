import sample from "@/assets/img/sample.jpg";
import "./hamburger.css";
import HamburgerMenu from "./HamburgerMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-between lg:justify-end px-10 py-4 items-center mb-5">
      {/* <div className="w-6 h-6 lg:hidden">
        <img className="w-full h-full" src={bars.src} alt="" />
      </div> */}
      <HamburgerMenu
        image={session?.user?.image as string}
        name={session?.user?.name as string}
      ></HamburgerMenu>
      <div className="flex w-9 h-9 justify-center items-center border-2 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={session?.user?.image as string}
        />
      </div>
    </div>
  );
};

export default Header;
