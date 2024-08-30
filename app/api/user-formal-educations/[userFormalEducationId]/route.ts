import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { userFormalEducationId: string } },
) {
  try {
    const userFormalEducationId = params.userFormalEducationId;
    const result = await prisma.userFormalEducation.findUnique({
      where: {
        id: userFormalEducationId,
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
  { params }: { params: { userFormalEducationId: string } },
) {
  try {
    const userFormalEducationId = params.userFormalEducationId;
    const data = await req.json();

    const result = await prisma.userFormalEducation.update({
      where: {
        id: userFormalEducationId,
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
  { params }: { params: { userFormalEducationId: string } },
) {
  try {
    const userFormalEducationId = params.userFormalEducationId;
    const result = await prisma.userFormalEducation.delete({
      where: {
        id: userFormalEducationId,
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
