import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Audience } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let audience;

    switch (body.audience) {
      case "public":
        audience = Audience.PUBLIC;
        break;
      case "friends":
        audience = Audience.FRIENDS;
        break;
      case "only me":
        audience = Audience.ONLY_ME;
        break;
    }

    if (!audience) {
      return new NextResponse("Audience not specified", { status: 400 });
    }

    await prisma.post.create({
      data: {
        audience,
        description: body.description,
        author: { connect: { id: body.authorId } },
        img: body.img,
      },
    });
    return new NextResponse("Post added successfully.", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}
