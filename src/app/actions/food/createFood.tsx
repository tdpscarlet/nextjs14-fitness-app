"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

const createFood = async (
  value: string,
  name: string,
  meal: string,
  servingSize: number,
  calo?: number,
  carb?: number,
  protein?: number,
  totalFat?: number,
  satFat?: number,
  sugar?: number,
  sodium?: number,
  fiber?: number,
  cholesterol?: number
) => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  });

  const date = await prisma.day.findUnique({
    where: {
      userId: user?.id!,
      value,
    },
  });

  if (!date) {
    await prisma.day.create({
      data: {
        value,
        userId: user?.id!,
      },
    });
  }

  await prisma.food.create({
    data: {
      dayId: date?.id!,
      name,
      meal,
      servingSize,
      calo,
      carb,
      protein,
      totalFat,
      satFat,
      sugar,
      sodium,
      fiber,
      cholesterol,
    },
  });
};

export default createFood;
