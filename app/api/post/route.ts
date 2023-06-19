import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { Audience } from "@prisma/client";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { description, audience, email, img } = body;

  if (!description || !audience || !email) {
    return new NextResponse("Missing fields", { status: 500 });
  }

  let audienceEnum;

  if (audience === "public") {
    audienceEnum = Audience.PUBLIC;
  } else if (audience === "friends") {
    audienceEnum = Audience.FRIENDS;
  } else {
    audienceEnum = Audience.ONLY_ME;
  }

  try {
    await prisma.post.create({
      data: {
        description,
        audience: audienceEnum,
        author: { connect: { email } },
        img,
      },
    });
    return new NextResponse(
      JSON.stringify({ message: "Post added successfully" }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
