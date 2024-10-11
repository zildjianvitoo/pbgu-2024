import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { fileUpload } from "@/lib/file-upload";
import crypto from "crypto";
import path from "path";

export const prisma = new PrismaClient();

export async function GET() {
  try {
    const result = await prisma.finalist.findMany({
      orderBy: {
        number: "asc",
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
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const gender = formData.get("gender") as string;
    const number = formData.get("number") as string;
    const detail = formData.get("detail") as string;
    const faculty = formData.get("faculty") as string;
    const prodi = formData.get("prodi") as string;
    const percentage = formData.get("percentage") as string;
    const image = formData.get("image") as File;

    if (!image) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // const extension = path.extname(image.name);

    // const randomName = crypto.randomBytes(16).toString("hex") + extension;

    await fileUpload(image, "uploads");
    const filePath = `${process.env.NEXT_PUBLIC_BASE_URL}/api/images/${image.name}`;

    const result = await prisma.finalist.create({
      data: {
        name: name,
        gender: gender,
        number: number,
        percentage: percentage,
        detail: detail,
        faculty: faculty,
        prodi: prodi,
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
