import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { fileUpload } from "@/lib/fileUpload";

export async function GET(req: NextRequest) {
  try {
    const result = await prisma.activityImages.findMany({
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
    const formData = await req.formData();
    console.log(formData);

    const activitySlug = formData.get("activitySlug") as string;
    const image = formData.get("image") as File;

    if (!image) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const filename = await fileUpload(image, "uploads");
    const filePath = `${process.env.NEXT_PUBLIC_BASE_URL}/api/images/${filename}`;

    const result = await prisma.activityImages.create({
      data: {
        activitySlug: activitySlug,
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
