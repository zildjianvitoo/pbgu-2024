import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { userPersonalInfoId: string } },
) {
  try {
    const userPersonalInfoId = params.userPersonalInfoId;
    const result = await prisma.userPersonalInfo.findUnique({
      where: {
        id: userPersonalInfoId,
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
  { params }: { params: { userPersonalInfoId: string } },
) {
  try {
    const userPersonalInfoId = params.userPersonalInfoId;
    const data = await req.json();

    const result = await prisma.userPersonalInfo.update({
      where: {
        id: userPersonalInfoId,
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
  { params }: { params: { userPersonalInfoId: string } },
) {
  try {
    const userPersonalInfoId = params.userPersonalInfoId;
    const result = await prisma.userPersonalInfo.delete({
      where: {
        id: userPersonalInfoId,
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
