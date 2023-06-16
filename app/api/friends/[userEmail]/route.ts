import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { userEmail: string } }
) {
  const { userEmail } = params;

  try {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      select: {
        friends: { select: { id: true, firstName: true, lastName: true } },
      },
    });
    return new NextResponse(JSON.stringify(user?.friends ?? []), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
