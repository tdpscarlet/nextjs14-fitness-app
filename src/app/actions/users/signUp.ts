"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

export const signUp = async (email: string, name: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  }); //Get user data
  if (user) {
    return "User with that email already exists!";
  }

  const passwordHash = bcrypt.hashSync(password, 10); //Hash password

  await prisma.user.create({
    data: {
      email,
      name,
      password: passwordHash,
      goal: {
        create: {
          calo: 2000,
          carb: 65,
          protein: 15,
          fat: 20,
        },
      },
    },
  }); //Create new user

  return "Successfully create new user!";
};
