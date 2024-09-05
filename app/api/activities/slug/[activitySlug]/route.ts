import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { activitySlug: string } },
) {
  try {
    const activitySlug = params.activitySlug;
    const result = await prisma.activities.findUnique({
      where: {
        slug: activitySlug,
      },
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong!", error },
      { status: 500 },
    );
  }
}
