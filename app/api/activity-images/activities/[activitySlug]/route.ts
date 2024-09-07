import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { activitySlug: string } },
) {
  try {
    const activitySlug = params.activitySlug;
    const result = await prisma.activityImages.findMany({
      where: {
        activitySlug: activitySlug,
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
