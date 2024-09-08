import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { fileUpload } from "@/lib/fileUpload";

export async function GET(
  request: Request,
  { params }: { params: { activityId: string } },
) {
  try {
    const activityId = params.activityId;
    const result = await prisma.activities.findUnique({
      include: {
        ActivityImages: true,
      },
      where: {
        id: activityId,
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

export async function PUT(
  req: Request,
  { params }: { params: { activityId: string } },
) {
  try {
    const activityId = params.activityId;
    const data = await req.json();

    const result = await prisma.activities.update({
      where: {
        id: activityId,
      },
      data: data,
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong!", error },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { activityId: string } },
) {
  try {
    const activityId = params.activityId;
    const result = await prisma.activities.delete({
      where: {
        id: activityId,
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
