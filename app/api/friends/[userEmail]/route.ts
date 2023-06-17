import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { userEmail: string } }
) {
  const { userEmail } = params;
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search");

  try {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      select: {
        friends: {
          where: {
            ...(search && {
              OR: [
                { firstName: { startsWith: search, mode: "insensitive" } },
                { lastName: { startsWith: search, mode: "insensitive" } },
              ],
            }),
          },
          select: { id: true, firstName: true, lastName: true },
        },
      },
    });
    return new NextResponse(JSON.stringify(user?.friends ?? []), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
