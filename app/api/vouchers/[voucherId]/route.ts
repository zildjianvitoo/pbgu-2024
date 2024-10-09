import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { voucherId: string } },
) {
  try {
    const voucherId = params.voucherId;
    const result = await prisma.voucher.findUnique({
      where: {
        id: voucherId,
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
  { params }: { params: { voucherId: string } },
) {
  try {
    const voucherId = params.voucherId;
    const data = await req.json();

    const result = await prisma.voucher.update({
      where: {
        id: voucherId,
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
  { params }: { params: { voucherId: string } },
) {
  try {
    const voucherId = params.voucherId;
    const result = await prisma.voucher.delete({
      where: {
        id: voucherId,
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
