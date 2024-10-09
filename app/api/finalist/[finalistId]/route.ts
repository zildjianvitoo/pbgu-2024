import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { fileUpload } from "@/lib/file-upload";

export async function GET(
  request: Request,
  { params }: { params: { finalistId: string } },
) {
  try {
    const finalistId = params.finalistId;
    const result = await prisma.finalist.findUnique({
      where: {
        id: finalistId,
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
  { params }: { params: { finalistId: string } },
) {
  try {
    const finalistId = params.finalistId;

    const formData = await req.formData();

    const name = formData.get("name") as string;
    const gender = formData.get("gender") as string;
    const number = formData.get("number") as string;
    const detail = formData.get("detail") as string;
    const faculty = formData.get("faculty") as string;
    const prodi = formData.get("prodi") as string;
    const percentage = formData.get("percentage") as string;
    const image = formData.get("image") as File | string;

    if (!image) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    let filePath;

    if (image instanceof File) {
      await fileUpload(image, "uploads");
      filePath = `${process.env.NEXT_PUBLIC_BASE_URL}/api/images/${image.name}`;
    } else {
      filePath = image;
    }

    const result = await prisma.finalist.update({
      where: {
        id: finalistId,
      },
      data: {
        name: name,
        gender: gender,
        number: number,
        percentage: percentage,
        detail: detail,
        faculty: faculty,
        prodi: detail,
        image: filePath,
      },
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
  { params }: { params: { finalistId: string } },
) {
  try {
    const finalistId = params.finalistId;
    const result = await prisma.finalist.delete({
      where: {
        id: finalistId,
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
