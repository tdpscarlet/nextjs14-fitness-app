import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
import DashboardNav from "@/components/Dashboard/DashboardNav";
import Header from "@/components/Dashboard/Header";

interface ProtectedLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return (
      <div className="m-8 text-center">
        You must log in to access dashboard!
        <Link href="/auth/login" className="text-[--primary]">
          {" "}
          Log In
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-row bg-[--light-grey] min-h-screen">
      <DashboardNav />
      <div className="flex flex-col w-full">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default ProtectedLayout;
