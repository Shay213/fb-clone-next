import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search");
  const { userId } = params;

  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (userId !== session.user.id) {
      return new NextResponse("You can search only your friends", {
        status: 401,
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        friends: {
          where: {
            OR: [
              { firstName: { startsWith: search || undefined } },
              { lastName: { startsWith: search || undefined } },
            ],
          },
          select: {
            id: true,
            firstName: true,
            lastName: true,
            picture: true,
          },
        },
      },
    });
    return new NextResponse(JSON.stringify(user?.friends), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 400 });
  }
}
