"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

const createGoals = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  });
  if (user) {
    await prisma.goal.create({
      data: {
        userId: user?.id!,
        calo: 1000,
        carb: 65,
        protein: 15,
        fat: 20,
      },
    });
  }
};

export default createGoals;
