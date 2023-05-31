import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { FormData } from "@/app/@auth/modals/RegisterModal";
import { Gender } from "@prisma/client";

export const POST = async (request: Request) => {
  const body = (await request.json()) as FormData;
  const {
    "first name": firstName,
    "last name": lastName,
    email,
    password,
    gender,
    birthday,
  } = body;

  if (!firstName || !lastName || !email || !password || !gender || !birthday) {
    return new NextResponse("Missing fields", { status: 400 });
  }

  const exists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (exists) {
    return new NextResponse("Email already exists", { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      birthday,
      email,
      gender: gender === "male" ? Gender.MALE : Gender.FEMALE,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
};
