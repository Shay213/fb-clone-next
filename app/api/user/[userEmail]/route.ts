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
        id: true,
      },
    });
    if (!user) {
      return NextResponse.error();
    }
    return NextResponse.json(user.id);
  } catch (error) {
    return NextResponse.error();
  }
}
