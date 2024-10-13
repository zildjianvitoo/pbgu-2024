import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { name: string } },
) {
  try {
    const name = params.name;

    const result = await prisma.appStatics.findUnique({
      where: {
        name: name,
      },
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!", error },
      { status: 500 },
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { name: string } },
) {
  try {
    const data = await req.json();
    const name = params.name;

    const result = await prisma.appStatics.update({
      where: {
        name: name,
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
  req: Request,
  { params }: { params: { name: string } },
) {
  try {
    const name = params.name;
    const result = await prisma.appStatics.delete({
      where: {
        name: name,
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
