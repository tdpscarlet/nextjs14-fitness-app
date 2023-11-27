"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const editGoals = async (
  carb: number,
  fat: number,
  protein: number,
  calo: number,
  userId: string
) => {
  if (!userId) return "User ID not found";

  await prisma.goal.update({
    where: {
      userId: userId,
    },
    data: {
      calo,
      carb,
      protein,
      fat,
    },
  });
  return "Saved";
};

export default editGoals;
