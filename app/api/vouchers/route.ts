import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { customAlphabet } from "nanoid";

export async function GET() {
  try {
    const result = await prisma.voucher.findMany({
      include: {
        finalist: true,
      },
      orderBy: {
        createdAt: "desc",
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

export async function POST(req: NextRequest) {
  try {
    const { quantity, price } = await req.json();

    const nanoid = customAlphabet("ABCDEFGHIKLMNOPQRSTUVWXYZ1234567890", 8);

    const vouchers = Array.from({ length: quantity }, () => ({
      code: "BGU" + nanoid(),
      price: price,
    }));

    const result = await prisma.voucher.createMany({
      data: vouchers,
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
