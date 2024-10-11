import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await prisma.voucher.findMany({
      where: {
        status: {
          equals: "sudah-terpakai",
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        price: true,
        finalistId: true,
        finalist: true,
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
