"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

const getFood = async (value: string) => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  });

  const date = await prisma.day.findUnique({
    where: {
      userId: user?.id,
      value,
    },
  });

  if (!date) {
    return null;
  }

  const food = await prisma.food.findMany({
    where: {
      dayId: date.id,
    },
  });

  return food;
};

export default getFood;
