import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get("tag");

  if (!tag) {
    return new NextResponse(JSON.stringify({ message: "tag not found" }), {
      status: 400,
    });
  }

  revalidateTag(tag);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
