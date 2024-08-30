import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { userInformalEducationId: string } },
) {
  try {
    const userInformalEducationId = params.userInformalEducationId;
    const result = await prisma.userInformalEducation.findUnique({
      where: {
        id: userInformalEducationId,
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
  { params }: { params: { userInformalEducationId: string } },
) {
  try {
    const userInformalEducationId = params.userInformalEducationId;
    const data = await req.json();

    const result = await prisma.userInformalEducation.update({
      where: {
        id: userInformalEducationId,
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
  { params }: { params: { userInformalEducationId: string } },
) {
  try {
    const userInformalEducationId = params.userInformalEducationId;
    const result = await prisma.userInformalEducation.delete({
      where: {
        id: userInformalEducationId,
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
