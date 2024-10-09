import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await prisma.voucher.findMany({
      select: {
        price: true,
        finalistId: true,
      },
      include: {
        finalist: true,
      },
      where: {
        status: "sudah terpakai",
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
