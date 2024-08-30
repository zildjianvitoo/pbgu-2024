import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { userAchievementId: string } },
) {
  try {
    const userAchievementId = params.userAchievementId;
    const result = await prisma.userAcheivement.findUnique({
      where: {
        id: userAchievementId,
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
  { params }: { params: { userAchievementId: string } },
) {
  try {
    const userAchievementId = params.userAchievementId;
    const data = await req.json();

    const result = await prisma.userAcheivement.update({
      where: {
        id: userAchievementId,
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
  { params }: { params: { userAchievementId: string } },
) {
  try {
    const userAchievementId = params.userAchievementId;
    const result = await prisma.userAcheivement.delete({
      where: {
        id: userAchievementId,
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
