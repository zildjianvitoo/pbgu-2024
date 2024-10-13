import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export async function GET() {
  try {
    const result = await prisma.appStatics.findMany();

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!", error },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const result = await prisma.appStatics.create({
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
