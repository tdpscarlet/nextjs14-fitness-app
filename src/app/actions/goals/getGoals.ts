"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

const getGoals = async () => {
  const session = await getServerSession(authOptions);
  const goals = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
    include: {
      goal: true,
    },
  }); //Get goal data

  return goals;
};

export default getGoals;
