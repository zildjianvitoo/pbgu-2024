import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { userGeneralInfoId: string } },
) {
  try {
    const userGeneralInfoId = params.userGeneralInfoId;
    const result = await prisma.userGeneralInfo.findUnique({
      where: {
        id: userGeneralInfoId,
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
  { params }: { params: { userGeneralInfoId: string } },
) {
  try {
    const userGeneralInfoId = params.userGeneralInfoId;
    const data = await req.json();

    const result = await prisma.userGeneralInfo.update({
      where: {
        id: userGeneralInfoId,
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
  { params }: { params: { userGeneralInfoId: string } },
) {
  try {
    const userGeneralInfoId = params.userGeneralInfoId;
    const result = await prisma.userGeneralInfo.delete({
      where: {
        id: userGeneralInfoId,
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
