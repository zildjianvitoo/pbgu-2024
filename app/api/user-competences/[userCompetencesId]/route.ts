import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { userCompetencesId: string } },
) {
  try {
    const userCompetencesId = params.userCompetencesId;
    const result = await prisma.userCompetence.findUnique({
      where: {
        id: userCompetencesId,
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
  { params }: { params: { userCompetencesId: string } },
) {
  try {
    const userCompetencesId = params.userCompetencesId;
    const data = await req.json();

    const result = await prisma.userCompetence.update({
      where: {
        id: userCompetencesId,
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
  { params }: { params: { userCompetencesId: string } },
) {
  try {
    const userCompetencesId = params.userCompetencesId;
    const result = await prisma.userCompetence.delete({
      where: {
        id: userCompetencesId,
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
