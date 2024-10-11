import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { code: string } },
) {
  try {
    const code = params.code;
    const result = await prisma.voucher.findUnique({
      where: {
        code: code,
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
  { params }: { params: { code: string } },
) {
  try {
    const code = params.code;
    const data = await req.json();

    const voucher = await prisma.voucher.findUnique({
      where: {
        code: code,
      },
    });

    if (!voucher) {
      return NextResponse.json(
        { error: "Kode Voucher Salah/Tidak Ditemukan!" },
        { status: 400 },
      );
    }

    if (voucher.status === "sudah-terpakai") {
      return NextResponse.json(
        { error: "Kode Voucher Sudah Pernah Digunakan!" },
        { status: 400 },
      );
    }

    const result = await prisma.voucher.update({
      where: {
        code: code,
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
