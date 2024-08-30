import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { organizationalExperienceId: string } },
) {
  try {
    const organizationalExperienceId = params.organizationalExperienceId;
    const result = await prisma.userOrganizationalExperience.findUnique({
      where: {
        id: organizationalExperienceId,
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
  { params }: { params: { organizationalExperienceId: string } },
) {
  try {
    const organizationalExperienceId = params.organizationalExperienceId;
    const data = await req.json();

    const result = await prisma.userOrganizationalExperience.update({
      where: {
        id: organizationalExperienceId,
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
  { params }: { params: { organizationalExperienceId: string } },
) {
  try {
    const organizationalExperienceId = params.organizationalExperienceId;
    const result = await prisma.userOrganizationalExperience.delete({
      where: {
        id: organizationalExperienceId,
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
