"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

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
